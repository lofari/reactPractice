import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from "../actions";
import {BrowserRouter} from "react-router-dom";
import Employee from "./Employee";


const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    getEmployees();
  }, [search]);

  const getEmployees = async () => {
    //  http://portfolio-api-dev.amalgama.co/1/employees
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setEmployees( data );
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  const renderEmployees = () => {
    if (query === '') {
      return (
          <div className="ui equal width grid">
            {
              employees.map( (employee) => (
                  <Employee employee={employee} key={employee.id} />
              ))}
          </div>
      );
    } else {
        const filteredEmployees = employees.filter( (employee) => {return employee.name.toLowerCase().includes(query.toLowerCase());
          });
        return (
          <div className="ui equal width grid">
              {filteredEmployees.map( (employee) => (
                  <Employee employee={employee} key={employee.id} />
              ))}
          </div>
      );
    }
  }

  return (
      <div className="">
        <BrowserRouter>
          <form onSubmit={getSearch} className="ui segment">
            <div className="ui search">
              <label>Search</label>
              <input className="prompt" type="text" value={search} onChange={updateSearch}/>
            </div>
          </form>
          <div className="ui divider"/>
          {renderEmployees()}
        </BrowserRouter>
      </div>

  );
}

export default EmployeeList;