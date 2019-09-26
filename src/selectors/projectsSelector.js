import { createSelector } from "reselect";

const projectsSelector = state => state.projectsReducer.projects;

export const getProjects = createSelector(
  [projectsSelector],
  projects => {
    return projects;
  }
);
