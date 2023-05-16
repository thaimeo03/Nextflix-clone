import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function useFavoriteList() {
    const { data, error, isLoading, mutate } = useSWR("/api/favoriteList", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return { data, error, isLoading, mutate };
}
