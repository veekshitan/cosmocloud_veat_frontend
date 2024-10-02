import { SET_LOCATION } from "../constants/ActionTypes.js";

const initialState = {
  latitude: 0.0,
  longitude: 0.0,
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        lat: action.payload.latitude,
        long: action.payload.longitude,
      };
    default:
      return state;
  }
};

export default LocationReducer;
