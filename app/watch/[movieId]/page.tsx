"use client";
import useMovie from "@/app/hooks/useMovie";
import { useParams, useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Watch() {
    const router = useRouter();
    const { movieId }: any = useParams();
    const { data } = useMovie(movieId as string);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70 cursor-pointer">
                <AiOutlineArrowLeft
                    onClick={() => router.push("/")}
                    className="text-white"
                    size={40}
                />
                <p className="text-white text-xl md:text-3xl font-bold">
                    <span className="font-light">Watching:</span>
                    {data?.title}
                </p>
            </nav>

            <video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>
        </div>
    );
}
