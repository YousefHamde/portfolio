// useHero.js
import { useQuery } from "@tanstack/react-query";
import { getHero } from "../services/apiPortfolio";

export function useHero() {
  const {
    isPending: isLoading,
    data: hero,
    isError,
    error,
  } = useQuery({
    queryKey: ["hero"],
    queryFn: getHero,
  });

  return { isLoading, hero, isError, error };
}
