import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE
} from "../actions/types";
import _ from 'lodash';

const initialState = {
  employees: [],
  employee: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {...state, employees: _.mapKeys(action.payload, "id")};
    case FETCH_EMPLOYEE:
      return {...state, employee: Object.values(state.employees).find( (employee) => employee.id == action.payload)};
    default:
      return state;
  }
}
