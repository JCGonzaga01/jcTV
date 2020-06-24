import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { RootAction, RootState, Services, isActionOf } from "typesafe-actions";

import { fetchSubscriptionTypeAsync } from "store/actions/subscription";

export const fetchSubscriptionTypeAsyncEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  _state$,
  { api }
) =>
  action$.pipe(
    filter(isActionOf(fetchSubscriptionTypeAsync.request)),
    mergeMap(() =>
      from(api.subscription.fetchSubscription()).pipe(
        map(fetchSubscriptionTypeAsync.success),
        catchError((message: string) => of(fetchSubscriptionTypeAsync.failure(message)))
      )
    )
  );
