import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  // Define the initial position for the map
  const defaultCenter = { lat: -34.397, lng: 150.644 };

  // Optional: Define additional styles for the map
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
      >
        {/* Add marker for the default center */}
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
