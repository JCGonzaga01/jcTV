import { RootState } from "typesafe-actions";
import { FreeState } from "store/reducers/free";

export const free = (state: RootState) => state.free;

export const isFetching = (state: FreeState) => state.isFetching;
