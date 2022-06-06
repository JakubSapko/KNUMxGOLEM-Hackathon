import { LatLngExpression } from "leaflet";
import { Marker as MarkerComponent, Popup } from "react-leaflet";
import { useLocalizationsContext } from "../../contexts";
import { Localization } from "../../types";

type Props = { localization: Localization };

export const Marker = ({ localization }: Props) => {
  const { handleLocalizationChange } = useLocalizationsContext();

  const handleSelect = () => {
    handleLocalizationChange(localization.id);
  };

  return (
    <MarkerComponent
      position={localization.position as LatLngExpression}
      eventHandlers={{ click: handleSelect }}
    >
      <Popup>{localization.name}</Popup>
    </MarkerComponent>
  );
};
