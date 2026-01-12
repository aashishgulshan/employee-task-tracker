import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt.js";
import prisma from "../../config/prisma.js";

export const registerUser = async ({ name, email, password, role }) => {
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword, role: role || "EMPLOYEE" }
    });
    const token = generateToken({ id: user.id, role: user.role });
    return {
        token, user: {
            id: user.id,
            role: user.role,
            name: user.name,
            email: user.email,
        }
    };
}

export const loginUser = async ({ email, password }) => {
    const user = await prisma.user.findUnique({
        where: { email }
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
        }
    }
}