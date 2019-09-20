import {
  FETCH_PROJECT,
  FETCH_PROJECTS
} from "../actions/types";
import _ from 'lodash';

const initialState = {
  projects: [],
  project: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {...state, projects: _.mapKeys(action.payload, "id")};
    case FETCH_PROJECT:
      return {...state, project: Object.values(state.projects).find( (project) => project.id == action.payload)};
    default:
      return state;
  }
}
