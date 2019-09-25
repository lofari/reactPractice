import { createSelector } from 'reselect';

const projectsSelector = state => state.projectsReducer.projects;
const selectedProjectSelector = state => state.projectsReducer.project;

export const getProject = createSelector(
    [projectsSelector, selectedProjectSelector],
    (projects, selected) => projects.find( project => selected == project)
)
