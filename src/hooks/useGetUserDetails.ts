import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "@/api/user";

export const useGetUserDetails = (userId: string | null) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserDetails(userId as string),
    enabled: !!userId, 
    staleTime: 1000 * 60 * 5, 
  });
};