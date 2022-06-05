import { Localization } from "../types";

const regionName = "Mazowieckie";
const cityName = "Londek";

const districtsMock: Localization[] = [];
// new Array(5)
//   .fill(0)
//   .map(
//     (_, id) =>
//       new Localization(
//         `district-${id}`,
//         String(id),
//         String(id),
//         String(id),
//         String(id),
//         cityName,
//         regionName,
//         -0.09 + Math.random() - 0.5,
//         51.505 + Math.random() - 0.5
//       )
//   );

const citiesMock: Localization[] = [];
// new Array(5)
//   .fill(0)
//   .map(
//     (_, id) =>
//       new Localization(
//         `city-${id}`,
//         null,
//         String(id),
//         String(id),
//         null,
//         cityName,
//         regionName,
//         -0.09 + Math.random() - 0.5,
//         51.505 + Math.random() - 0.5
//       )
//   );

const regionsMock: Localization[] = [];
// new Array(5)
//   .fill(0)
//   .map(
//     (_, id) =>
//       new Localization(
//         `region-${id}`,
//         null,
//         null,
//         String(id),
//         null,
//         null,
//         regionName,
//         -0.09 + Math.random() - 0.5,
//         51.505 + Math.random() - 0.5
//       )
//   );

export const localizationsMock: Localization[] = [
  ...districtsMock,
  ...citiesMock,
  ...regionsMock,
];
