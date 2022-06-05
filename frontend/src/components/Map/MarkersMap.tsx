import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useLocalizationsContext } from "../../contexts";
import { Marker } from "./Marker";

const DEFAULT_POSITION: LatLngExpression = [51.505, -0.09];

export const MarkersMap = () => {
  const localizations = useLocalizationsContext();

  return (
    <MapContainer center={DEFAULT_POSITION} zoom={13} trackResize>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {localizations.map((localization) => (
        <Marker localization={localization} key={localization.id} />
      ))}
    </MapContainer>
  );
};
