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
// next
import Head from "next/head";
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
      <Head>
        <title>Welcome at Gate of Angels</title>
        <meta
          name="google-site-verification"
          content="vDV8D6rjZ5yhrgEa21AftY1b7Oyv6d1WKruUdfE6EWw"
        />
      </Head>
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
