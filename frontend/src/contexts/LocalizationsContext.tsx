import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useMarkers } from "../hooks";
import { Localization } from "../types";

type ContextType = {
  localizations: Localization[];
  currentLocalization: Localization | null;
  handleLocalizationChange: (localizationId: string) => void;
};

const LocalizationsContext = createContext<ContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const LocalizationsContextProvider = ({ children }: Props) => {
  const { data } = useMarkers();

  const localizations = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map(
      (dto) =>
        new Localization(
          String(dto.id),
          String(dto.district_id),
          String(dto.city_id),
          String(dto.region_id),
          dto.district_name,
          dto.city_name,
          dto.region_name,
          dto.lon_region,
          dto.lat_region,
          dto.lon_city,
          dto.lat_city,
          dto.lon_district,
          dto.lat_district
        )
    );
  }, [data]);

  console.log({ localizations });

  const [currentLocalization, setCurrentLocalization] =
    useState<Localization | null>(null);

  const handleLocalizationChange = (localizationId: string) => {
    const localization = localizations.find((loc) => loc.id === localizationId);

    setCurrentLocalization(localization || null);
  };

  const value: ContextType = {
    localizations,
    currentLocalization,
    handleLocalizationChange,
  };

  return (
    <LocalizationsContext.Provider value={value}>
      {children}
    </LocalizationsContext.Provider>
  );
};

export const useLocalizationsContext = (): ContextType => {
  const localizations = useContext(LocalizationsContext);

  if (!localizations) {
    throw new Error("useLocalizationsContext used outside its provider");
  }

  return localizations;
};
