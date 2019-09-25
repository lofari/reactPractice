import React, { useEffect} from 'react';
import {connect} from "react-redux";
import {selectProject} from "../actions";
import placeHolder from "../images/Untitledplaceholder.png";
import cardImage from "../images/7ath3mib77j31.jpg";
import {getProject} from "../selectors/selectedProject";

const ProjectDetail = (props) => {

  useEffect( () => {
    props.selectProject(props.match.params.id);
    console.log(props.match.params.id);
  }, []);

  console.log(props.project);
  if (!props.project) {
    return (
        <div className="ui segment">
          <div className="ui active inverted dimmer" style={{ marginTop: '150px'}}>
            <div className="ui massive text loader">Loading</div>
          </div>
        </div>
    );
  }

  return (
      <div className="ui segment items">
        <h3>Project Detail</h3>
        <div className="item">
          <div className="ui slide up instant reveal">
            <div className="visible content">
              <img src={placeHolder} className="ui small bordered image"/>
            </div>
            <div className="hidden content">
              <img src={cardImage} className="ui small bordered image"/>
            </div>
          </div>
          <div className="content" style={{marginLeft: '10px'}}>
            <div className="header">Name: {props.project.userId}</div>
            <div className="description"> Email: {props.project.id}</div>
            <div className="extra">Website: {props.project.title}</div>
          </div>

        </div>
      </div>

  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectsReducer.projects,
    project: getProject(state)
    // ownProps.match.params.id
  };
}


export default connect(
    mapStateToProps,
    {selectProject}
)(ProjectDetail);
