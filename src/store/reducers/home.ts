import { HomeType } from "HomeType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchHomeTypeAsync } from "store/actions/home";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchHomeTypeAsync.request], (_state, _action) => true)
  .handleAction(
    [fetchHomeTypeAsync.success, fetchHomeTypeAsync.failure],
    (_state, _action) => false
  );

export const payload = createReducer({} as HomeType).handleAction(
  fetchHomeTypeAsync.success,
  (_state, action) => action.payload
);

const homeReducer = combineReducers({
  isFetching,
  payload,
});

export default homeReducer;
export type HomeState = ReturnType<typeof homeReducer>;
