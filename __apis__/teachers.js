import axiosInstance from "./axios";

export const teachersFetcher = async () =>
  axiosInstance
    .get("/teachers/teachers-data")
    .then((response) => response.data);
