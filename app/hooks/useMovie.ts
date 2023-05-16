import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function useMovie(id?: string) {
    const { data, error, isLoading } = useSWR(`http://localhost:3000/api/movies/${id}`, fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false,
    });

    return { data, error, isLoading };
}
