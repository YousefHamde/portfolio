import { useQuery } from "@tanstack/react-query";
import { getAbout } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useAbout() {
  const {
    isPending: isLoading,
    data: aText,
    isError,
    error,
  } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });

  return { isLoading, aText, isError, error };
}
