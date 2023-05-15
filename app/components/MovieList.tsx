"use client";
import { isEmpty } from "lodash";
import useMovieList from "../hooks/useMovieList";
import MovieCard from "./MovieCard";

export interface movie {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnaiUrl: string;
    genre: string;
    duration: string;
}

export default function MovieList() {
    const { data: movies }: { data: movie[] } = useMovieList();
    if (isEmpty(movies)) {
        return null;
    }

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-white md:text-xl lg:text-2xl font-semibold mb-4">Trending now</p>
                <div className="grid grid-cols-4 gap-2">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}
