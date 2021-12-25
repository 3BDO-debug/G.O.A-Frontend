import { createContext, useState, useEffect } from "react";
// apis
import { galleryFetcher } from "../__apis__/gallery";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(async () => {
    await galleryFetcher()
      .then((galleryImages) => setGallery(galleryImages))
      .catch((error) => console.log("Gallery-context", error));
  }, []);

  return (
    <GalleryContext.Provider value={{ galleryState: [gallery, setGallery] }}>
      {children}
    </GalleryContext.Provider>
  );
};
