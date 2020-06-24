import { combineReducers } from "redux";
import homeReducer from "./reducers/home";
import cinemaReducer from "./reducers/cinema";
import freeReducer from "./reducers/free";
import subscriptionReducer from "./reducers/subscription";

const rootReducer = combineReducers({
  home: homeReducer,
  cinema: cinemaReducer,
  free: freeReducer,
  subscription: subscriptionReducer,
});

export default rootReducer;
