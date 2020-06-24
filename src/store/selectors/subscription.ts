import { RootState } from "typesafe-actions";
import { SubscriptionState } from "store/reducers/subscription";

export const subscription = (state: RootState) => state.subscription;

export const isFetching = (state: SubscriptionState) => state.isFetching;
