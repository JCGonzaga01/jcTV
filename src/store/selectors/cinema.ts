import { RootState } from "typesafe-actions";
import { CinemaState } from "store/reducers/cinema";

export const cinema = (state: RootState) => state.cinema;

export const isFetching = (state: CinemaState) => state.isFetching;
