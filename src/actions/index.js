import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEES,
  FETCH_PROJECT,
  FETCH_PROJECTS
} from "./types";

export const fetchEmployees = () => async dispatch => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/employees");
  dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
};

export const selectEmployee = id => async dispatch => {
  const response = await fetch(`/employee/${id}`);
  dispatch({ type: FETCH_EMPLOYEE, payload: response.data });
};

export const fetchProjects = () => async dispatch => {
  const response = await fetch("/projects");
  dispatch({ type: FETCH_PROJECTS, payload: response.data });
};

export const fetchProject = id => async dispatch => {
  const response = await fetch(`/project/${id}`);
  dispatch({ type: FETCH_PROJECT, payload: response.data });
};
