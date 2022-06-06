import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { MapConsumer, MapContainer, TileLayer } from "react-leaflet";
import { useLocalizationsContext } from "../../contexts";
import { LocalizationType } from "../../types";
import { Marker } from "./Marker";

const DEFAULT_POSITION: LatLngExpression = [52.237, 21.017];

export const MarkersMap = () => {
  const { localizations } = useLocalizationsContext();

  const [emptyState, setEmptyState] = useState(0);

  return (
    <MapContainer center={DEFAULT_POSITION} zoom={13} trackResize>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {emptyState && "s"}
      <MapConsumer>
        {(map) => {
          const bounds = map.getBounds();
          const zoom = map.getZoom();

          map.on("zoom", () => {});
          map.on({
            zoom: () => setEmptyState(zoom),
            move: () => setEmptyState(bounds.getCenter().lat),
          });

          return (
            <>
              {localizations
                .map((localization) => {
                  // xDDDD
                  const thanos = Math.random() > 0.75;
                  if (!thanos) return null;

                  const isVisible =
                    localization.getIsInBounds(bounds) &&
                    localization.getIsTypeVisible(zoom);

                  return isVisible ? (
                    <Marker localization={localization} key={localization.id} />
                  ) : null;
                })
                .filter(Boolean)}
            </>
          );
        }}
      </MapConsumer>
    </MapContainer>
  );
};
