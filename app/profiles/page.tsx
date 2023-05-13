/* eslint-disable @next/next/no-img-element */
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Profile() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/auth");
    }
    const { user } = session;

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <Link href="/">
                        <div className="group flex-row w-44 mx-auto">
                            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                                <img src="/images/default-blue.png" alt="profile" />
                            </div>
                            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:">
                                {user?.name}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
