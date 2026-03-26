import { useQuery } from "@tanstack/react-query";
import { getFooter } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useFooter() {
  const {
    isPending: isLoading,
    data: footerMessage,
    isError,
    error,
  } = useQuery({
    queryKey: ["footerMessage"],
    queryFn: getFooter,
  });

  return { isLoading, footerMessage, isError, error };
}
