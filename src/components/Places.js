

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Places() {
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY}>
      <div className="h-dvh w-dvh">
        <Map zoom={9} center={position} mapId={process.env.REACT_APP_MAP_ID}>


          
        </Map>
      </div>
    </APIProvider>
  )
}