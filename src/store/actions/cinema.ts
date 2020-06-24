import { CategoryListType } from "HomeType";
import { createAsyncAction } from "typesafe-actions";

export const fetchCinemaTypeAsync = createAsyncAction(
  "FETCH_CINEMA_TYPE_ASYNC_REQUEST",
  "FETCH_CINEMA_TYPE_ASYNC_SUCCCESS",
  "FETCH_CINEMA_TYPE_ASYNC_FAILURE"
)<undefined, CategoryListType, string>();
