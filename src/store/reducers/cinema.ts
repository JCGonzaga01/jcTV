import { CategoryListType } from "HomeType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchCinemaTypeAsync } from "store/actions/cinema";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchCinemaTypeAsync.request], (_state, _action) => true)
  .handleAction(
    [fetchCinemaTypeAsync.success, fetchCinemaTypeAsync.failure],
    (_state, _action) => false
  );

export const payload = createReducer({} as CategoryListType).handleAction(
  fetchCinemaTypeAsync.success,
  (_state, action) => action.payload
);

const cinemaReducer = combineReducers({
  isFetching,
  payload,
});

export default cinemaReducer;
export type CinemaState = ReturnType<typeof cinemaReducer>;
