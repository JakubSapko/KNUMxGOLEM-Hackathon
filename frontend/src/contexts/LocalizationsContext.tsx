import { createContext, ReactNode, useContext, useState } from "react";
import { Localization } from "../types";
import { localizationsMock } from "./localizationsMock";

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
  const localizations = localizationsMock;

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
