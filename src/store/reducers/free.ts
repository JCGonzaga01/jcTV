import { CategoryListType } from "HomeType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchFreeTypeAsync } from "store/actions/free";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchFreeTypeAsync.request], (_state, _action) => true)
  .handleAction(
    [fetchFreeTypeAsync.success, fetchFreeTypeAsync.failure],
    (_state, _action) => false
  );

export const payload = createReducer({} as CategoryListType).handleAction(
  fetchFreeTypeAsync.success,
  (_state, action) => action.payload
);

const freeReducer = combineReducers({
  isFetching,
  payload,
});

export default freeReducer;
export type FreeState = ReturnType<typeof freeReducer>;
