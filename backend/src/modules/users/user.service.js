import  prisma  from "../../config/prisma.js";

export const getAllEmployees = async () => {
  return prisma.user.findMany({
    where: { role: "EMPLOYEE" },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
};

export const getUserTasks = async (userId) => {
  return prisma.task.findMany({
    where: { assignedTo: Number(userId) },
    orderBy: { dueDate: "asc" },
  });
};