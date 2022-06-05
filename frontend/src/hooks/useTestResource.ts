import { api } from "../services";
import { TestResponse } from "../services/api";
import { getUseResource } from "./getUseResource";

export const useTestResource = getUseResource<TestResponse>(api.getTest);
