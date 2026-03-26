import { useQuery } from "@tanstack/react-query";
import { getSocialLinks } from "../services/apiPortfolio"; // أو المسار اللي عندك فعليًا

export function useSocialLinks() {
  const {
    isPending: isLoading,
    data: socialLinks ,
    isError,
    error,
  } = useQuery({
    queryKey: ["socialLinks"],
    queryFn: getSocialLinks,
  });

  return { isLoading, socialLinks, isError, error };
}
