import { LatLngBounds } from "leaflet";

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
    private regionLon: number,
    private regionLat: number,
    private cityLon: number,
    private cityLat: number,
    private districtLon: number,
    private districtLat: number
  ) {}

  get position() {
    switch (this.type) {
      case LocalizationType.District:
        return [this.districtLat, this.districtLon];
      case LocalizationType.City:
        return [this.cityLat, this.cityLon];
      case LocalizationType.Region:
      default:
        return [this.regionLat, this.regionLon];
    }
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

  getIsTypeVisible(zoom: number): boolean {
    const [min, max] = VisiblityThresholds[this.type];
    return min > zoom && zoom >= max;
  }

  getIsInBounds(bounds: LatLngBounds): boolean {
    const [y, x] = this.position;

    const isXInBounds = bounds.getEast() >= x && x >= bounds.getWest();
    const isYInBounds = bounds.getSouth() <= y && y <= bounds.getNorth();

    const isInBounds = isXInBounds && isYInBounds;

    return isInBounds;
  }
}
