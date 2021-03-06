import { LatLngExpression } from "leaflet";

export enum LocalizationType {
  District = "district",
  City = "city",
  Region = "region",
}

const VisiblityThresholds = {
  [LocalizationType.District]: [Infinity, 11],
  [LocalizationType.City]: [11, 9],
  [LocalizationType.Region]: [9, -Infinity],
};

export class Localization {
  constructor(
    readonly id: string,
    readonly districtId: string | null,
    readonly cityId: string | null,
    readonly regionId: string | null,
    private districtName: string | null,
    private cityName: string | null,
    private regionName: string | null,
    private lon: number,
    private lat: number
  ) {}

  get position(): LatLngExpression {
    return [this.lat, this.lon];
  }

  get name(): string {
    const district = this.districtName;
    const city = this.cityName;
    const region = this.regionName;

    const citySuffix = city ? `, ${city}` : "";
    const districtSuffix = district ? `, ${district}` : "";

    return `${region}${citySuffix}${districtSuffix}`;
  }

  get type(): LocalizationType {
    if (this.districtId) {
      return LocalizationType.District;
    } else if (this.cityId) {
      return LocalizationType.City;
    } else {
      return LocalizationType.Region;
    }
  }

  getIsVisible(zoom: number): boolean {
    const [min, max] = VisiblityThresholds[this.type];
    return min > zoom && zoom >= max;
  }
}
