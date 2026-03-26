import { useQuery } from "@tanstack/react-query";
import { getServices } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useServices() {
  const {
    isPending: isLoading,
    data: services,
    isError,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  return { isLoading, services, isError, error };
}
