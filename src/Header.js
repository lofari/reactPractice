import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item active">
          Portfolio
        </Link>
        <Link to="/employee/detail" className="item">
          All Projects
        </Link>
        <Link to="/projects" className="item">
          All Projects
        </Link>
      </div>
  );
};

export default Header;
