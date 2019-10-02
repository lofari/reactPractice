import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../actions";
import { getEmployees } from "../selectors/employeesSelector";
import Employee from "./Employee";
import "../EmployeeStyle.css";

const EmployeesList = props => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setDidMount(true);
      }, 0);
    };
  }, []);

  useEffect(() => {
    props.fetchEmployees();
  }, [search]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  const renderEmployees = () => {
    if (query === "") {
      return (
        <div className={`ui equal width grid`}>
          {props.employees.map(employee => (
            <Employee
              className={`fade-in ${didMount && "visible"} `}
              employee={employee}
              key={employee.id}
            />
          ))}
        </div>
      );
    } else {
      const filteredEmployees = props.employees.filter(employee => {
        return employee.name.toLowerCase().includes(query.toLowerCase());
      });
      if (filteredEmployees.length <= 0) {
        return <div>No encontramos resultados</div>;
      }
      return (
        <div className="ui equal width grid">
          {filteredEmployees.map(employee => (
            <Employee employee={employee} key={employee.id} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="">
      <form onSubmit={getSearch} className="ui segment">
        <div className="ui search">
          <i className="search icon"></i>
          <input
            style={{ marginLeft: "5px" }}
            className="prompt"
            type="text"
            value={search}
            onChange={updateSearch}
          />
        </div>
      </form>
      <h3>Users</h3>
      <div className="ui divider" />
      {renderEmployees()}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    employees: getEmployees(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeesList);
