import { createStore, combineReducers } from "redux";
import LocationReducer from "./reducers/LocationReducer";

const rootReducer = combineReducers({
  locationHandler: LocationReducer,
});

const store = createStore(rootReducer);

export default store;
