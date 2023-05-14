import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const movieCount = await prisma.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovies = await prisma.movie.findMany({
            take: 1,
            skip: randomIndex,
        });

        return new Response(JSON.stringify(randomMovies[0]));
    } catch (error: any) {
        console.log(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}
