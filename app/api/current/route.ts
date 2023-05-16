import serverAuth from "@/app/utils/serverAuth";

export async function GET(req: Request) {
    try {
        const { currentUser } = await serverAuth();

        return new Response(JSON.stringify(currentUser));
    } catch (error: any) {
        return new Response(JSON.stringify(error), { status: 400 });
    }
}
