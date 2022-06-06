import { LatLngBounds } from "leaflet";

export enum LocalizationType {
  District = "district",
  City = "city",
  Region = "region",
}

const VisiblityThresholds = {
  [LocalizationType.District]: [30, 12],
  [LocalizationType.City]: [12, 9],
  [LocalizationType.Region]: [9, 0],
};

export class Localization {
  type: LocalizationType;
  name: string;
  position: [number, number];

  readonly districtId: string | null;
  readonly cityId: string | null;
  readonly regionId: string | null;

  constructor(
    readonly id: string,
    districtId: string | null,
    cityId: string | null,
    regionId: string | null,
    districtName: string | null,
    cityName: string | null,
    regionName: string,
    regionLon: number,
    regionLat: number,
    cityLon: number | null,
    cityLat: number | null,
    districtLon: number | null,
    districtLat: number | null
  ) {
    this.districtId = districtId === "null" ? null : districtId;
    this.cityId = cityId === "null" ? null : cityId;
    this.regionId = regionId;

    this.type = this.getType(this.districtId, this.cityId);
    this.name = this.getName(regionName, cityName, districtName);
    this.position = this.getPosition(
      districtLat,
      districtLon,
      cityLat,
      cityLon,
      regionLat,
      regionLon
    );
  }

  getPosition(
    districtLat: number | null,
    districtLon: number | null,
    cityLat: number | null,
    cityLon: number | null,
    regionLat: number,
    regionLon: number
  ) {
    switch (this.type) {
      case LocalizationType.District:
        return [districtLat, districtLon] as [number, number];
      case LocalizationType.City:
        return [cityLat!, cityLon!] as [number, number];
      case LocalizationType.Region:
      default:
        return [regionLat, regionLon] as [number, number];
    }
  }

  getName(
    regionName: string,
    cityName: string | null,
    districtName: string | null
  ): string {
    const district = districtName;
    const city = cityName;
    const region = regionName;

    const citySuffix = city ? `, ${city}` : "";
    const districtSuffix = district ? `, ${district}` : "";

    return `${region}${citySuffix}${districtSuffix}`;
  }

  getType(districtId: string | null, cityId: string | null): LocalizationType {
    if (districtId) {
      return LocalizationType.District;
    } else if (cityId) {
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
