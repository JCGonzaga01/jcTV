import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { fetchCinemaTypeAsync } from "store/actions/cinema";

export const fetchCinemaTypeAsyncEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  _state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(fetchCinemaTypeAsync.request)),
    mergeMap(() =>
      from(api.cinema.fetchCinema()).pipe(
        map(fetchCinemaTypeAsync.success),
        catchError((message: string) => of(fetchCinemaTypeAsync.failure(message)))
      )
    )
  );
