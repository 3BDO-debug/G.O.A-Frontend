import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// next
import Head from "next/head";
// material
import { Avatar } from "@mui/material";
// contexts
import { GalleryContext } from "../contexts";
// apis
import { mainUrl } from "../__apis__/axios";
// components
import Breadcrumb from "../components/Breadcrumb";

const Gallery = () => {
  const gallery = React.useContext(GalleryContext).galleryState[0];

  const [galleryImages, setGalleryImages] = React.useState([]);

  const [imageIsOpen, setImageIsOpen] = React.useState(false);
  const [openedImageIndex, setOpenedImageIndex] = React.useState(0);

  React.useEffect(() => {
    setGalleryImages(
      gallery.map((galleryImage) => `${mainUrl}/${galleryImage.image}`)
    );
  }, [gallery]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Gate of Angels gallery"
        />
        <meta
          name="keywords"
          content="Nursery, Gate of angels, Gate of angels nursery, nursery at maadi, nurserys "
        />
        <meta name="author" content="Gate of Angels" />
        <meta name="copyright" content="Gate of Angels" />
      </Head>
      <Breadcrumb title="Gallery" href="/gallery" />

      <div className="container margin__top margin__bottom">
        <div className="row">
          <div className="col-lg-8 offset-lg-4 mx-auto ">
            <div className="section__title__container text-center">
              <h5 className="section__subtitle">Together We Can Create</h5>
              <h2 className="section__title">Who Stand By Your Kids Always</h2>
              <p className="section__contnet section__margin__bottom">
                While the unit economics were a driving factor, the company says
                its acquisition of lidar company Blackmore and the integration
                of that tech in its self-driving stack has made the shift to
                trucks possible. Aurora has said its FirstLight.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {gallery.map((galleryImage, index) => (
            <div className="col-lg-3" key={index}>
              <Avatar
                onClick={() => {
                  setOpenedImageIndex(0);
                  setImageIsOpen(true);
                }}
                src={`${mainUrl}/${galleryImage.image}`}
                alt={galleryImage.image_name}
                variant="rounded"
                sx={{ width: "350px", height: "350px", cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        {imageIsOpen && (
          <Lightbox
            mainSrc={galleryImages[openedImageIndex]}
            nextSrc={
              galleryImages[(openedImageIndex + 1) % galleryImages.length]
            }
            prevSrc={
              galleryImages[
                (openedImageIndex + galleryImages.length - 1) %
                  galleryImages.length
              ]
            }
            onCloseRequest={() => setImageIsOpen(false)}
            onMovePrevRequest={() =>
              setOpenedImageIndex(
                (openedImageIndex + galleryImages.length - 1) %
                  galleryImages.length
              )
            }
            onMoveNextRequest={() =>
              setOpenedImageIndex((openedImageIndex + 1) % galleryImages.length)
            }
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
