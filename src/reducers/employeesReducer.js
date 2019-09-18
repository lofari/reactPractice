import {
  FETCH_EMPLOYEES
} from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {...state, ..._.mapKeys(action.payload, "id")};
    default:
      return state;
  }
}
