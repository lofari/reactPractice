import { List, Record } from 'immutable'
import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE
} from "../actions/types";
import _ from 'lodash';

const initialState = Record ({
  employees: List(),
  employee: null
})();

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return state.set( 'employees', List(action.payload) )
    case FETCH_EMPLOYEE:
      return state.set('employee', state.employees.find( (employee) => employee.id == action.payload))
    default:
      return state;
  }
}
