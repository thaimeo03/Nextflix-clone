import { getServerSession } from "next-auth";
import Logout from "./components/Logout";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth");
    }

    return (
        <main>
            <h1 className="text-4xl text-blue-500">Hello: {session.user?.name} </h1>
            <Logout />
        </main>
    );
}
