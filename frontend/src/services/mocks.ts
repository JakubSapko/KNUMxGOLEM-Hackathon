import { RoomsCountHistogram } from "../hooks";

export const mockData = [
  {
    value: 2,
  },
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 4,
  },
  {
    value: 6,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 3,
  },
];

export const getMockedRoomsCountHistogram = (): RoomsCountHistogram =>
  new Array(30).fill(0).map((_) => Math.floor(Math.random() * 10));
