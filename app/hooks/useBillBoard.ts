import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function useBillBoard() {
    const { data, error, isLoading } = useSWR("/api/random", fetcher, {
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
