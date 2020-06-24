import { CategoryListType } from "HomeType";
import { createAsyncAction } from "typesafe-actions";

export const fetchSubscriptionTypeAsync = createAsyncAction(
  "FETCH_SUBSCRIPTION_TYPE_ASYNC_REQUEST",
  "FETCH_SUBSCRIPTION_TYPE_ASYNC_SUCCCESS",
  "FETCH_SUBSCRIPTION_TYPE_ASYNC_FAILURE"
)<undefined, CategoryListType, string>();
