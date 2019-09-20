import React from 'react';
import { Link } from "react-router-dom";
import cardImage from '../images/7ath3mib77j31.jpg';
const Employee = ({ employee: { name, email, username, id }}) => {
  return (
      <Link className="ui item" to={`/employee/${id}`}>
        <div className="ui card" style={{ marginTop: '15px', marginLeft: '55px' }}>
          <div className="four wide column" >
            <div className="image">
              <img src={cardImage} alt="" style={{ width: '100%' , height: '300px' }}/>
            </div>
            <div className="content" style={{ margin: '0px 10px 10px 10px' }}>
              <p className="header">Name: {name}</p>
              <div className="meta">
                <span className="description">E-mail: {email}</span>
              </div>
              <div className="description">
                Username: {username}
              </div>
              <div className="extra content">
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}

export default Employee;
