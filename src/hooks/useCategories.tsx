import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useCategories() {
  const {
    isPending: isLoading,
    data: Categories,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { isLoading, Categories, isError, error };
}
