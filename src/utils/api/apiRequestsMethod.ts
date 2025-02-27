import axiosInstance from "./axios";

export const postRequest = async (url?: any, data?: any) => {
  try {
    const result = await axiosInstance.post(url, data);
    return result;
  } catch (error: any) {
    return error;
  }
};

export const getRequest = async (url: any) => {
  try {
    const result = await axiosInstance.get(url);
    return result;
  } catch (error: any) {
    return error;
  }
};

export const deleteRequest = async (url: any, data?: any) => {
  try {
    const result = await axiosInstance.delete(url, data);
    return result;
  } catch (error: any) {
    return error;
  }
};

export const patchRequestAvatar = async (url: any, data?: any) => {
  try {
    const result = await axiosInstance.patch(url, data);
    return result;
  } catch (error: any) {
    return error;
  }
};

export const patchRequest = async (url: any, data?: any) => {
  try {
    const result = await axiosInstance.patch(url, data);
    return result;
  } catch (error: any) {
    return error;
  }
};

export const postRequestFormData = async (url: any, data: any) => {
  try {
    const result = await axiosInstance({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result;
  } catch (error: any) {
    return error;
  }
};

export const patchRequestFormData = async (url: any, data: any) => {
  try {
    const result = await axiosInstance({
      method: "patch",
      url: url,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result;
  } catch (error: any) {
    return error;
  }
};
