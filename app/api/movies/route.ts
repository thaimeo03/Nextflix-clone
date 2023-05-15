import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const movies = await prisma.movie.findMany();

        return new Response(JSON.stringify(movies));
    } catch (error: any) {
        return new Response(JSON.stringify({ error: "Something error" }), { status: 400 });
    }
}
