import { RootState } from 'typesafe-actions';
import { HomeState } from "store/reducers/home";

export const home = (state: RootState) => state.home;

export const isFetching = (state: HomeState) => state.isFetching;
