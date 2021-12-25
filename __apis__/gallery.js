import axiosInstance from "./axios";

export const galleryFetcher = async () =>
  axiosInstance
    .get("/gallery/gallery-images-data")
    .then((response) => response.data);
