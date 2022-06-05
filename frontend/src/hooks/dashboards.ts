import { api } from "../services";
import { RoomsCountHistogramParams } from "../services/api";
import { getUseResource } from "./getUseResource";

export type RoomsCountHistogram = number[];

export const useRoomsCountHistogram = getUseResource<
  RoomsCountHistogram,
  RoomsCountHistogramParams
>(api.getRoomsCountHistogram);
