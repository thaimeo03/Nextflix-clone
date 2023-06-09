import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function protectedAuth() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/auth");
    }
}
