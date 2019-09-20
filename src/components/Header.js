import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="ui secondary pointing menu" style={{fontSize : '1.2rem'}}>
        <Link to="/" className="item active">
          All Users
        </Link>
        <Link to="/projects" className="item active">
          All Projects
        </Link>
      </div>
  );
};

export default Header;
