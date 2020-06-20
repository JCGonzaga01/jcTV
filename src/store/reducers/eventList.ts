import { EventCategoryType } from "EventListType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchEventListAsync } from "store/actions/eventList";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchEventListAsync.request], (_state, _action) => true)
  .handleAction(
    [fetchEventListAsync.success, fetchEventListAsync.failure],
    (_state, _action) => false
  );

export const payload = createReducer({} as EventCategoryType).handleAction(
  fetchEventListAsync.success,
  (_state, action) => action.payload
);

const eventListReducer = combineReducers({
  isFetching,
  payload,
});

export default eventListReducer;
export type EventListState = ReturnType<typeof eventListReducer>;
