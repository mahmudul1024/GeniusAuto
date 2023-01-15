import React from "react";

import {
  CircleF,
  GoogleMap,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { useState } from "react";

const FindUs = () => {
  const [latitude, setLat] = useState(51.42848318268059);
  const [longitude, setLong] = useState(6.790433677275282);

  //   const handleLocation = () => {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });
  //   };
  const position = {
    lat: latitude,
    lng: longitude,
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.1,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 50,
    zIndex: 1,
  };

  return (
    <div>
      <div>
        {/* <button onClick={handleLocation} className="btn btn-primary">
          locate me
        </button> */}
        <LoadScript googleMapsApiKey="AIzaSyAznA7LjOv_1wX0866pkNVJFUuX4B9IxRo">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={16}
            id="marker-example"
          >
            <MarkerF onLoad={onLoad} position={position} visible={true} />
            <CircleF
              // optional
              onLoad={onLoad}
              // required
              center={position}
              // required
              options={options}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default FindUs;
