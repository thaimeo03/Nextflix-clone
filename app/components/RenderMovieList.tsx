"use client";
import useFavoriteList from "../hooks/useFavoriteList";
import useMovieList from "../hooks/useMovieList";
import MovieList from "./MovieList";

export default function RenderMovieList() {
    const { data: movies } = useMovieList();
    const { data: favorites } = useFavoriteList();

    return (
        <div>
            <MovieList title="Trending" movies={movies} />
            <MovieList title="My List" movies={favorites} />
        </div>
    );
}
