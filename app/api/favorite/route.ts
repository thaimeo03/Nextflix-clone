import serverAuth from "@/app/utils/serverAuth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { currentUser } = await serverAuth();
        const { movieId }: any = await req.json();

        const existingMovie = await prisma.movie.findUnique({
            where: {
                id: movieId,
            },
        });
        if (!existingMovie) {
            throw new Error("Invalid ID");
        }

        const user = await prisma.user.update({
            where: {
                email: currentUser.email || "",
            },
            data: {
                favoriteIds: {
                    push: movieId,
                },
            },
        });

        return new Response(JSON.stringify({ user }));
    } catch (error: any) {
        return new Response(JSON.stringify(error), { status: 400 });
    }
}
