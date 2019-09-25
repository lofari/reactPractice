import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from "../actions";
import Project from "./Project";


const ProjectsList = (props) => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    props.fetchProjects();
  }, [search]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    console.log(props.projects);
    setQuery(search);
  };

  const renderProjects = () => {
    if ( !props.projects ) {
        return (
            <div className="ui segment">
              <div className="ui active dimmer">
                <div className="ui massive text loader">Loading</div>
              </div>
            </div>
        );
      }
    if (query === '') {
      return (
          <div className="ui container">
            {
              props.projects.map( (project) => (
                  <Project project={project} key={project.id} />
              ))}
          </div>
      );
    } else {
      const filteredProjects = props.projects.filter( (project) => {return project.title.toLowerCase().includes(query.toLowerCase());
      });
      if ( filteredProjects.length <= 0 ) {
        return (<div>No encontramos resultados</div>);
      }
      return (
          <div className="ui equal width grid">
            {filteredProjects.map( (project) => (
                <Project project={project} key={project.id} />
            ))}
          </div>
      );
    }
  }

  return (
      <div className="">
        <form onSubmit={getSearch} className="ui segment">
          <div className="ui search">
            <i className="search icon"></i>
            <input style={{ marginLeft: '5px'}} className="prompt" type="text" value={search} onChange={updateSearch}/>
          </div>
        </form>
        <h3>Projects</h3>
        <div className="ui divider"/>
        {renderProjects()}
      </div>

  );
};
const mapStateToProps = (state) => {
  return {
    projects: state.projectsReducer.projects
  };
}

export default connect(
    mapStateToProps,
    {fetchProjects}
)(ProjectsList);
