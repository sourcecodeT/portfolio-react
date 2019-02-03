import React from "react";
import GoogleMapReact from "google-map-react";
import FMarker from "resources/f_marker.png";

export default function GoogleMap() {
  const center = { lat: 34.29738, lng: -83.82531 };
  const zoom = 9;
  return (
    <section
      className="contact_map"
      style={{ height: "100vh", width: "50%", opacity: 0.8 }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <img
          alt="Google maps marker"
          src={FMarker}
          style={{
            height: 40,
            width: 32,
            opacity: 0.8,
            position: "absolute",
            top: -40
          }}
        />
      </GoogleMapReact>
    </section>
  );
}
