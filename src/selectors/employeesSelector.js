import { createSelector } from "reselect";
import Employee from "../Employee";

const employeesSelector = state => state.employeesReducer.employees;

export const getEmployees = createSelector(
  [employeesSelector],
  employees => {
    return employees.map(employee => Employee.fromJSON());
  }
);
