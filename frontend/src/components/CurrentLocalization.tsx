import { useLocalizationsContext } from "../contexts";

export const CurrentLocalization = () => {
  const { currentLocalization } = useLocalizationsContext();

  if (!currentLocalization) return null;

  return <div>{currentLocalization.name}</div>;
};
