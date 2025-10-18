import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserDetails } from "@/api/user";

interface UpdateUserVariables {
  userId: string;
  payload: {
    userName?: string;
    xhandle?: string;
    instagramHandle?: string;
    figmaHandle?: string;
    linkedInHandle?: string;
  };
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, payload }: UpdateUserVariables) =>
      updateUserDetails({ userId, payload }),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user", variables.userId],
      });
    },

    onError: (error) => {
      console.error("Failed to update user:", error);
    },
  });
};
