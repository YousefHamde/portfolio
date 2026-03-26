import { useQuery } from "@tanstack/react-query";
import { getTimeline } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useTimeline() {
  const {
    isPending: isLoading,
    data: timeline,
    isError,
    error,
  } = useQuery({
    queryKey: ["timeline"],
    queryFn: getTimeline,
  });

  return { isLoading, timeline, isError, error };
}
