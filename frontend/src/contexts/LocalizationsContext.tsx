import { createContext, ReactNode, useContext } from "react";
import { Localization } from "../types";

const regionName = "Mazowieckie";
const cityName = "Londek";

const LocalizationsContext = createContext<Localization[] | null>(null);

const districtsMock = new Array(5)
  .fill(0)
  .map(
    (_, id) =>
      new Localization(
        String(id),
        String(id),
        String(id),
        String(id),
        String(id),
        cityName,
        regionName,
        -0.09 + Math.random() - 0.5,
        51.505 + Math.random() - 0.5
      )
  );

const citiesMock = new Array(5)
  .fill(0)
  .map(
    (_, id) =>
      new Localization(
        String(id),
        null,
        String(id),
        String(id),
        null,
        cityName,
        regionName,
        -0.09 + Math.random() - 0.5,
        51.505 + Math.random() - 0.5
      )
  );

const regionsMock = new Array(5)
  .fill(0)
  .map(
    (_, id) =>
      new Localization(
        String(id),
        null,
        null,
        String(id),
        null,
        null,
        regionName,
        -0.09 + Math.random() - 0.5,
        51.505 + Math.random() - 0.5
      )
  );

const localizationsMock: Localization[] = [
  ...districtsMock,
  ...citiesMock,
  ...regionsMock,
];

type Props = {
  children: ReactNode;
};

export const LocalizationsContextProvider = ({ children }: Props) => {
  const localizations = localizationsMock;

  console.log({ localizations });

  return (
    <LocalizationsContext.Provider value={localizations}>
      {children}
    </LocalizationsContext.Provider>
  );
};

export const useLocalizationsContext = (): Localization[] => {
  const localizations = useContext(LocalizationsContext);

  if (!localizations) {
    throw new Error("useLocalizationsContext used outside its provider");
  }

  return localizations;
};
