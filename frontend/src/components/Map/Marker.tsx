import { useState } from "react";
import { Marker as MarkerComponent, Popup, useMapEvent } from "react-leaflet";
import { Localization } from "../../types";

const useLocalizationVisible = (localization: Localization): boolean => {
  const map = useMapEvent("zoom", () => {
    const zoom = map.getZoom();

    setIsVisible(localization.getIsVisible(zoom));
  });

  const [isVisible, setIsVisible] = useState(() => {
    const zoom = map.getZoom();

    return localization.getIsVisible(zoom);
  });

  return isVisible;
};

type Props = { localization: Localization };

export const Marker = ({ localization }: Props) => {
  const isVisible = useLocalizationVisible(localization);

  if (!isVisible) {
    return null;
  }

  return (
    <MarkerComponent position={localization.position}>
      <Popup>{localization.name}</Popup>
    </MarkerComponent>
  );
};
