import { CategoryListType } from "HomeType";
import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchSubscriptionTypeAsync } from "store/actions/subscription";

export const isFetching = createReducer(false as boolean)
  .handleAction([fetchSubscriptionTypeAsync.request], (_state, _action) => true)
  .handleAction(
    [fetchSubscriptionTypeAsync.success, fetchSubscriptionTypeAsync.failure],
    (_state, _action) => false
  );

export const payload = createReducer({} as CategoryListType).handleAction(
  fetchSubscriptionTypeAsync.success,
  (_state, action) => action.payload
);

const subscriptionReducer = combineReducers({
  isFetching,
  payload,
});

export default subscriptionReducer;
export type SubscriptionState = ReturnType<typeof subscriptionReducer>;
