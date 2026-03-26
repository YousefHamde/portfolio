import { useQuery } from "@tanstack/react-query";
import { getContactInfo } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useContactInfo() {
  const {
    isPending: isLoading,
    data: contactInfo,
    isError,
    error,
  } = useQuery({
    queryKey: ["contactInfo"],
    queryFn: getContactInfo,
  });

  return { isLoading, contactInfo, isError, error };
}
