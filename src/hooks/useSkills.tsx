import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useSkills() {
  const {
    isPending: isLoading,
    data: skills,
    isError,
    error,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });

  return { isLoading, skills, isError, error };
}
