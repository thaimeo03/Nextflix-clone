import serverAuth from "@/app/utils/serverAuth";
import { PrismaClient } from "@prisma/client";
import { without } from "lodash";

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

        const updateFavoriteIds = without(currentUser.favoriteIds, movieId);
        const updatedUser = await prisma.user.update({
            where: {
                email: currentUser.email || "",
            },
            data: {
                favoriteIds: updateFavoriteIds,
            },
        });
        return new Response(JSON.stringify(updatedUser));
    } catch (error: any) {
        return new Response(JSON.stringify(error), { status: 400 });
    }
}
