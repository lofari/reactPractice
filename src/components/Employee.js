import React from 'react';
import { Link } from "react-router-dom";
import cardImage from '../images/7ath3mib77j31.jpg';
const Employee = ({ employee: { name, email, username, id }}) => {
  return (
      <Link to={`/employee/${id}`}>
        <div className="ui card" style={{ marginTop: '15px' }}>
          <div className="four wide column">
            <div className="image">
              <img src={cardImage} alt="" style={{ width: '100%' , height: '300px' }}/>
            </div>
            <div className="content">
              <p className="header">{name}</p>
              <div className="meta">
                <span className="date">{email}</span>
              </div>
              <div className="description">
                {username}
              </div>
              <div className="extra content">
                <i className="user icon"/>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}

export default Employee;
