import  prisma  from "../../config/prisma.js";

export const createTask = async (data) => {
  return prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      dueDate: new Date(data.dueDate),
      assignedTo: Number(data.assignedTo),
    },
  });
};

export const getAllTasks = async () => {
  return prisma.task.findMany({
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const updateTaskStatus = async (taskId, status) => {
  return prisma.task.update({
    where: { id: Number(taskId) },
    data: { status },
  });
};