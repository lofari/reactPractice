import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {selectEmployee} from "../actions";
import cardImage from '../images/7ath3mib77j31.jpg'
import placeHolder from '../images/Untitledplaceholder.png'
import { getEmployee } from "../selectors/selectedEmployee";
const EmployeeDetail = (props) => {


  useEffect( () => {
    props.selectEmployee(props.match.params.id);
    console.log(props.match.params.id);
  }, []);
  console.log(props.employee);
  if (!props.employee) {
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
        <h3>Employee Detail</h3>
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
           <div className="header">Name: {props.employee.name}</div>
            <div className="description"> Email: {props.employee.email}</div>
            <div className="description">Phone number: {props.employee.phone}</div>
            <div className="description">Working at: {props.employee.company.name}</div>
            <div className="extra">Website: {props.employee.website}</div>
          </div>

        </div>
      </div>

  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employeesReducer.employees,
    employee: getEmployee(state)
    // ownProps.match.params.id
  };
};


export default connect(
    mapStateToProps,
    {selectEmployee}
)(EmployeeDetail);
