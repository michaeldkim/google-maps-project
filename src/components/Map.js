import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const Map = () => (
  <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* Other map components */}
    </GoogleMap>
  </LoadScript>
);

export default Map;