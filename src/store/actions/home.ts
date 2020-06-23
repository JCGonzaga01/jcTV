import { HomeType } from "HomeType";
import { createAsyncAction } from "typesafe-actions";

export const fetchHomeTypeAsync = createAsyncAction(
  "FETCH_HOME_TYPE_ASYNC_REQUEST",
  "FETCH_HOME_TYPE_ASYNC_SUCCCESS",
  "FETCH_HOME_TYPE_ASYNC_FAILURE"
)<undefined, HomeType, string>();
