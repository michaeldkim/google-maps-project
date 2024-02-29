import './App.css';
import { MyMap, SearchBar } from './components';
import React, { useState } from 'react';

function App() {
  const [center, setCenter] = useState({
    lat: 40.702530,
    lng: -73.925370,
  })

  const handleSearch = (searchQuery) => {
    // Use Google Places API or another geocoding service to get the location
    // For the sake of this example, let's assume you get back a result with latitude and longitude
    const result = getGeocode(searchQuery);
    result.then((location) => {
      setCenter({
        lat: location.lat,
        lng: location.lng,
      });
    });
    console.log(center)
  };

  // Placeholder for geocoding function - replace with real API call
  const getGeocode = async (address) => {
    // use Google Geocoding API or similar to get the location from the address
    // returning a dummy location for now
    return new Promise((resolve) => {
      resolve({ lat: 40.7128, lng: -74.0060 }); // Example coordinates for New York City
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        Google Maps React
        <SearchBar onSearch={handleSearch}/>
      </header>

      <div>
        <MyMap center={center} />
      </div>
    </div>
  );
}

export default App;
