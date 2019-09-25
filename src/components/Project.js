import React from 'react';
import { Link } from "react-router-dom";
import cardImage from '../images/7ath3mib77j31.jpg';
const Project = ({ project: { userId, id, title }}) => {
  return (
      <Link className="ui container segment" style={{marginTop: '10px'}} to={`/project/${id}`}>
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img src={cardImage}/>
            </div>
            <div className="content">
              <a className="header">{title}. {id} . {userId}</a>
              <div className="meta">
                <span>{title}</span>
              </div>
              <div className="description">
                <p>{title}</p>
              </div>
              <div className="extra">
                Additional Details
              </div>
            </div>
          </div>
        </div>
      </Link>

  );
}

export default Project;
