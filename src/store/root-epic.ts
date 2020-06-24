import { combineEpics } from "redux-observable";

import * as homeEpic from "./epics/home";
import * as cinemaEpic from "./epics/cinema";
import * as freeEpic from "./epics/free";
import * as subscriptionEpic from "./epics/subscription";

export default combineEpics(
  ...Object.values(homeEpic),
  ...Object.values(cinemaEpic),
  ...Object.values(freeEpic),
  ...Object.values(subscriptionEpic)
);
