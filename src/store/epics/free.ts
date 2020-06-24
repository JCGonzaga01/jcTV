import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { fetchFreeTypeAsync } from "store/actions/free";

export const fetchFreeTypeAsyncEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  _state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(fetchFreeTypeAsync.request)),
    mergeMap(() =>
      from(api.free.fetchFree()).pipe(
        map(fetchFreeTypeAsync.success),
        catchError((message: string) => of(fetchFreeTypeAsync.failure(message)))
      )
    )
  );
