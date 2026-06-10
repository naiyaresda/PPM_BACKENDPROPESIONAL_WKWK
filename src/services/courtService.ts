import prisma from "../config/prisma.js";

export const getAllCourts = async () => {
    return await prisma.court.findMany();
};

export const getCourtById = async (id: number) => {
    return await prisma.court.findUnique({
        where: { id },
    });
};

export const createCourt = async (data: {
    name: string;
    type: string;
    price: number;
    description?: string;
    image?: string;
}) => {
    return await prisma.court.create({
        data,
    });
};