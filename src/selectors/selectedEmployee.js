import { createSelector } from "reselect";
import { getEmployees } from "./employeesSelector";
import { Employee } from "../Employee";

const selectedEmployeeSelector = state => state.employeesReducer.employee;

export const getEmployee = createSelector(
  [getEmployees, selectedEmployeeSelector],
  (employees, selected) => {
    if (!selected) return new Employee();
    console.log(selected);
    return Employee.fromJSON(
      employees.find(employee => selected.id == employee.id)
    );
  }
);
