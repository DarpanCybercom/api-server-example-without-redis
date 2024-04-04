import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
  try {
    console.log(prisma, "Prisma");
    const users = await prisma.employee.findMany();
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Employee = { getAll };
