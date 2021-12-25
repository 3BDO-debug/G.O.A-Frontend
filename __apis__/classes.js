import axiosInstance from "./axios";

export const classesFetcher = async () =>
  axiosInstance.get("/classes/classes-data").then((response) => response.data);

export const classesDescriptionsFetcher = async () =>
  axiosInstance
    .get("/classes/classes-descriptions-data")
    .then((response) => response.data);
