import { combineReducers } from "redux";
import eventListReducer from "./reducers/eventList";

const rootReducer = combineReducers({
  // router: routerReducer,
  eventList: eventListReducer,
});

export default rootReducer;
