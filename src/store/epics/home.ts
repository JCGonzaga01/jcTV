import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { fetchHomeTypeAsync } from "store/actions/home";

export const fetchHomeTypeAsyncEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  _state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(fetchHomeTypeAsync.request)),
    mergeMap(() =>
      from(api.home.fetchHome()).pipe(
        map(fetchHomeTypeAsync.success),
        catchError((message: string) => of(fetchHomeTypeAsync.failure(message)))
      )
    )
  );
