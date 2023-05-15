import fetcher from "../utils/fetcher";
import useSWR from "swr";

interface movie {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnaiUrl: string;
    genre: string;
    duration: string;
}

export default function useMovieList() {
    const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading,
    };
}
