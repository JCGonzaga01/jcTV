import { combineEpics } from "redux-observable";

import * as homeEpic from "./epics/home";

export default combineEpics(...Object.values(homeEpic));
