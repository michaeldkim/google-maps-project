import { useState, useMemo } from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Combobox, Popover } from "@headlessui/react";

 export default function Places() {
  const center = useMemo(() => ({ lat: 40.730610, lng:-73.935242 }), []);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false)
  
  return (
    <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY}>
      <div className="h-dvh w-dvh">
        <div className="places-container">
          <PlacesAutocomplete setSelected={setSelected} />
        </div>

        <Map zoom={10} center={center} mapId={process.env.REACT_APP_MAP_ID}>
          { selected && <AdvancedMarker position={selected} />}
        </Map>
      </div>
    </APIProvider>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    clearSuggestions();
  };

  return (
    <Combobox onChange={handleSelect}>
      <Combobox.Input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <Popover>
        <Combobox.Options>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <Combobox.Option key={place_id} value={description} />
            ))}
        </Combobox.Options>
      </Popover>
    </Combobox>
  );
};