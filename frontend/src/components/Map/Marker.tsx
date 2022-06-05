import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Marker as MarkerComponent, Popup, useMapEvents } from "react-leaflet";
import { useLocalizationsContext } from "../../contexts";
import { Localization } from "../../types";

const useLocalizationVisible = (localization: Localization): boolean => {
  const map = useMapEvents({
    zoom: () => {
      const zoom = map.getZoom();

      setIsTypeVisible(localization.getIsTypeVisible(zoom));
    },
    move: () => {
      const bounds = map.getBounds();

      setIsInBounds(localization.getIsInBounds(bounds));
    },
  });

  const [isTypeVisible, setIsTypeVisible] = useState(() => {
    const zoom = map.getZoom();

    return localization.getIsTypeVisible(zoom);
  });

  const [isInBounds, setIsInBounds] = useState(() => {
    const bounds = map.getBounds();

    return localization.getIsInBounds(bounds);
  });

  return isTypeVisible && isInBounds;
};

type Props = { localization: Localization };

export const Marker = ({ localization }: Props) => {
  const { handleLocalizationChange } = useLocalizationsContext();
  const isVisible = useLocalizationVisible(localization);

  const handleSelect = () => {
    handleLocalizationChange(localization.id);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <MarkerComponent
      position={localization.position as LatLngExpression}
      eventHandlers={{ click: handleSelect }}
    >
      <Popup>{localization.name}</Popup>
    </MarkerComponent>
  );
};
