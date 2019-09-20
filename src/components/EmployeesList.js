import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from "../actions";
import Employee from "./Employee";


const EmployeesList = (props) => {

  // const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    props.fetchEmployees();
  }, [search]);

  // const getEmployees = async () => {
  //   //  http://portfolio-api-dev.amalgama.co/1/employees
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   setEmployees( data );
  // };

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
              props.employees.map( (employee) => (
                  <Employee employee={employee} key={employee.id} />
              ))}
          </div>
      );
    } else {
        const filteredEmployees = props.employees.filter( (employee) => {return employee.name.toLowerCase().includes(query.toLowerCase());
          });
        if ( filteredEmployees.length <= 0 ) {
          return (<div>No encontramos resultados</div>);
        }
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
          <form onSubmit={getSearch} className="ui segment">
            <div className="ui search">
              <i className="search icon"></i>
              <input style={{ marginLeft: '5px'}} className="prompt" type="text" value={search} onChange={updateSearch}/>
            </div>
          </form>
          <h3>Users</h3>
          <div className="ui divider"/>
          {renderEmployees()}
      </div>

  );
};
const mapStateToProps = (state) => {
  return {
      employees: Object.values(state.employeesReducer.employees)
  };
}

export default connect(
    mapStateToProps,
    {fetchEmployees}
)(EmployeesList);
