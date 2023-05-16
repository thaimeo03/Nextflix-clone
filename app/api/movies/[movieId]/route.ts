import serverAuth from "@/app/utils/serverAuth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { movieId: string } }) {
    try {
        await serverAuth();
        const movieId = params.movieId;

        if (typeof movieId !== "string") {
            throw new Error("Invalid ID");
        }

        if (!movieId) {
            throw new Error("Invalid ID");
        }

        const movie = await prisma.movie.findUnique({
            where: {
                id: movieId,
            },
        });

        if (!movie) {
            throw new Error("Invalid ID");
        }

        return new Response(JSON.stringify(movie));
    } catch (error: any) {
        return new Response(JSON.stringify(error), { status: 400 });
    }
}
