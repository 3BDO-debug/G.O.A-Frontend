import "react-modal-video/css/modal-video.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/responsive.css";
import "../components/FontawesomeIcons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import SimpleReactLightbox from "simple-react-lightbox";
import NextNProgress from "nextjs-progressbar";
// contexts
import {
  ClassesProvider,
  GalleryProvider,
  TeachersProvider,
} from "../contexts";
// layouts
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="rgb(244, 77, 25)" height={4} />
      <GalleryProvider>
        <ClassesProvider>
          <TeachersProvider>
            <div className="app ">
              <Navbar />
              <SimpleReactLightbox>
                <div>
                  <Component {...pageProps} />
                </div>
              </SimpleReactLightbox>

              <Footer />
            </div>
          </TeachersProvider>
        </ClassesProvider>
      </GalleryProvider>
    </>
  );
}

export default MyApp;
