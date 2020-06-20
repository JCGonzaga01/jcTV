import { EventCategoryType } from "EventListType";
import { createAsyncAction } from "typesafe-actions";

export const fetchEventListAsync = createAsyncAction(
  "FETCH_EVENT_LIST_ASYNC_REQUEST",
  "FETCH_EVENT_LIST_ASYNC_SUCCCESS",
  "FETCH_EVENT_LIST_ASYNC_FAILURE"
)<undefined, EventCategoryType, string>();
