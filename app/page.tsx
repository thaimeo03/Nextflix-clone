import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth");
    }

    return (
        <main>
            <Navbar />
            <Billboard />
            <div className="pb-40">
                <MovieList />
            </div>
        </main>
    );
}
