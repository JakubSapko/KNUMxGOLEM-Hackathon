import { RoomsCountHistogram } from "../hooks";
import { getMockedRoomsCountHistogram } from "./mocks";

export type TestResponse = [string];

export type RoomsCountHistogramParams = { id: string };

type MarkerDto = {
  id: number;
  index: number;
  district_id: number | null;
  city_id: number | null;
  region_id: number;
  city_name: string | null;
  lon_city: number | null;
  lat_city: number | null;
  district_name: string | null;
  lon_district: number | null;
  lat_district: number | null;
  region_name: string;
  lon_region: number;
  lat_region: number;
};

const get = (url: string) => fetch(url);

const post = <T>(url: string, data: T) =>
  fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

class Api {
  constructor(readonly basePath: string = "/api") {}

  getMarkers = async () => {
    const response = await get(this.getUrl("/markers/"));
    const data: MarkerDto[] = await response.json();

    return data;
  };

  getRoomsCountHistogram = async ({ id }: RoomsCountHistogramParams) => {
    const response = (await new Promise((resolve) =>
      setTimeout(() => resolve(getMockedRoomsCountHistogram()), 1000)
    )) as RoomsCountHistogram;

    return response;
  };

  getUrl = (endpoint: string) => {
    return `${this.basePath}/${endpoint}`;
  };
}

export const api = new Api();
