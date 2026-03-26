import { useQuery } from "@tanstack/react-query";
import { getContactMessage } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useContactMessage() {
  const {
    isPending: isLoading,
    data: contactMessage,
    isError,
    error,
  } = useQuery({
    queryKey: ["contactMessage"],
    queryFn: getContactMessage,
  });

  return { isLoading, contactMessage, isError, error };
}
