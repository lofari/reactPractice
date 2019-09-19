import {
  FETCH_PROJECTS
} from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {...state, ..._.mapKeys(action.payload, "id")};
    default:
      return state;
  }
}
