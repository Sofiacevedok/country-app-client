import {
  GET_COUNTRIES,
  GET_ACTIVITY,
  CREATE_ACTIVITY,
  GET_COUNTRY,
} from '../actions/index';

const initialState = {
  country: [],
  countries: [],
  activities: [],
  loading: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.concat(action.payload),
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
}
