import { List, Record } from 'immutable';
import {
  FETCH_PROJECT,
  FETCH_PROJECTS
} from "../actions/types";
import _ from 'lodash';

const initialState = Record({
  projects: List(),
  project: null
})();

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return state.set( 'projects', List(action.payload) );
    case FETCH_PROJECT:
      return state.set( 'project', state.projects.find( (project) => project.id == action.payload ));
    default:
      return state;
  }
}
