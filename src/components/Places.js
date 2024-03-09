

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Places() {
  const position = { lat: 40.730610, lng:-73.935242 };
  const [open, setOpen] = useState(false)

  return (
    <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY}>
      <div className="h-dvh w-dvh">
        <Map zoom={10} center={position} mapId={process.env.REACT_APP_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin  
              background={"green"}
              borderColor={"black"}
              glyphColor={"white"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow
              position={position}
              onCloseClick={() => setOpen(false)}
            >
              <div>You are here!</div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  )
}