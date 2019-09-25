import { createSelector } from 'reselect';

const employeesSelector = state => state.employeesReducer.employees;
const selectedEmployeeSelector = state => state.employeesReducer.employee;

export const getEmployee = createSelector(
  [employeesSelector, selectedEmployeeSelector],
  (employees, selected) => employees.find( employee => selected == employee));
