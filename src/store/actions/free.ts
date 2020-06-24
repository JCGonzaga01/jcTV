import { CategoryListType } from "HomeType";
import { createAsyncAction } from "typesafe-actions";

export const fetchFreeTypeAsync = createAsyncAction(
  "FETCH_FREE_TYPE_ASYNC_REQUEST",
  "FETCH_FREE_TYPE_ASYNC_SUCCCESS",
  "FETCH_FREE_TYPE_ASYNC_FAILURE"
)<undefined, CategoryListType, string>();
