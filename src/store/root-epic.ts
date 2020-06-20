import { combineEpics } from "redux-observable";

import * as eventListEpic from "./epics/eventList";

export default combineEpics(...Object.values(eventListEpic));
