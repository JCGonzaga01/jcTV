import { RootState } from 'typesafe-actions';
import { EventListState } from "store/reducers/eventList";

export const eventList = (state: RootState) => state.eventList;

export const isFetching = (state: EventListState) => state.isFetching;
