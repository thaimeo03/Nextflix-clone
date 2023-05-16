import serverAuth from "@/app/utils/serverAuth";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const { currentUser } = await serverAuth();

        const favoriteMovies = await prisma.movie.findMany({
            where: {
                id: {
                    in: currentUser.favoriteIds,
                },
            },
        });
        return new Response(JSON.stringify(favoriteMovies));
    } catch (error: any) {
        return new Response(JSON.stringify(error), { status: 400 });
    }
}
