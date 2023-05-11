import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { username, email, password } = req.body;
            const existingUser = await prisma.user.findUnique({
                where: {
                    email,
                },
            });

            if (existingUser) {
                return res.status(422).json({ error: "Email taken" });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await prisma.user.create({
                data: {
                    email,
                    name: username,
                    hashedPassword,
                    image: "",
                    emailVerified: new Date(),
                },
            });

            return res.json({ newUser });
        } catch (error) {
            console.log(error);
            return res.status(400).end();
        }
    }

    return res.status(405).end();
}
