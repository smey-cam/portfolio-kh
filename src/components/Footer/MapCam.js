import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapCam(){
  const defaultProps = {
    center: {
      lat: 11.5851829,
      lng: 104.901351
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%',marginTop:"5rem" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={511.5851829}
          lng={104.901351}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}