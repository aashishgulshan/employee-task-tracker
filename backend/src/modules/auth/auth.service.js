import bcrypt from "bcrypt";
import prisma from "../../config/prisma.js";
import { generateToken } from "../../utils/jwt.js";
import { AppError } from "../../utils/AppError.js";

export const registerUser = async ({ name, email, password, role }) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new AppError("User already exists", 409);
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role: role || "EMPLOYEE" },
    });
    const token = generateToken({ id: user.id, role: user.role });
    return {
      token,
      user: {
        id: user.id,
        role: user.role,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error("Invalid email address");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = generateToken({ id: user.id, role: user.role });
  return {
    token,
    user: {
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    },
  };
};
