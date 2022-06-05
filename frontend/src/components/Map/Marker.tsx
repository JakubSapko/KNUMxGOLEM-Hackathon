import { useState } from "react";
import { Marker as MarkerComponent, Popup, useMapEvent } from "react-leaflet";
import { useLocalizationsContext } from "../../contexts";
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
      position={localization.position}
      eventHandlers={{ click: handleSelect }}
    >
      <Popup>{localization.name}</Popup>
    </MarkerComponent>
  );
};
