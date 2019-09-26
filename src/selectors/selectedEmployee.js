import { createSelector } from "reselect";
import { getEmployees } from "./employeesSelector";

const selectedEmployeeSelector = state => state.employeesReducer.employee;

export const getEmployee = createSelector(
  [getEmployees, selectedEmployeeSelector],
  (employees, selected) => employees.find(employee => selected == employee)
);
