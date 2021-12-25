import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from "google-map-react";
const Map = () => {
  const defaultProps = {
    center: {
      lat: 29.96603,
      lng: 31.27985,
    },
    zoom: 17,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <div className="map__wrapper">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text={<FontAwesomeIcon icon={["fas", "map-marker-alt"]} />}
        />
      </GoogleMapReact>
    </div>
  );
};
export default Map;
