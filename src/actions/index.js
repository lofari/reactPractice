import api from '../api/api'
import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEES,
  FETCH_PROJECT,
  FETCH_PROJECTS
} from "./types";
import { createSelector } from 'reselect';
import _ from "lodash";

export const fetchEmployees = () => async dispatch => {
  try {
    const response = await api.get("/users");
    const employees = Object.values(_.mapKeys(response.data, "id"))
    dispatch({ type: FETCH_EMPLOYEES, payload: employees });
  } catch {
    alert("error")
  }
};

export const selectEmployee = employee => async dispatch => {
  dispatch({ type: FETCH_EMPLOYEE, payload: employee });
};

export const fetchProjects = () => async dispatch => {
  const response = await api.get("/albums");
  dispatch({ type: FETCH_PROJECTS, payload: response.data });
};

export const selectProject = project => async dispatch => {
  dispatch({ type: FETCH_PROJECT, payload: project });
};
