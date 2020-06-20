import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { fetchEventListAsync } from "store/actions/eventList";

export const fetchEventListAsyncEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  _state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(fetchEventListAsync.request)),
    mergeMap(() =>
      from(api.eventList.fetchEventList()).pipe(
        map(fetchEventListAsync.success),
        catchError((message: string) => of(fetchEventListAsync.failure(message)))
      )
    )
  );
