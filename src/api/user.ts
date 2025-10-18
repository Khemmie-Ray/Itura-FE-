import axiosInstance from "@/api/axiosInstance"

export const getUserDetails = async (userId: string) => {
    const { data } = await axiosInstance.get(`user/${userId}`);
    return data;
};

export const updateUserDetails = async ({
    userId,
    payload,
  }: {
    userId: string;
    payload: {
      userName?: string;
      xhandle?: string;
      instagramHandle?: string;
      figmaHandle?: string;
      linkedInHandle?: string;
    };
  }) => {
    const { data } = await axiosInstance.put(`user/update/${userId}`, payload);
    return data;
  };