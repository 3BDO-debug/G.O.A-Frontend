import axiosInstance from "./axios";

export const mailSender = async (requestData) =>
  axiosInstance({
    method: "post",
    url: "/mail/mail-data",
    data: requestData,
  }).then((response) => response.data);
