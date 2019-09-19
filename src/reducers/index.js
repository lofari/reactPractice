import { combineReducers } from "redux";
import employeesReducer from './employeesReducer';
import projectsReducer from "./projectsReducer";
export default combineReducers ({
  employeesReducer,
  projectsReducer
});
