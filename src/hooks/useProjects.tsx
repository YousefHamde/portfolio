import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useProjects() {
  const {
    isPending: isLoading,
    data: projects,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { isLoading, projects, isError, error };
}
