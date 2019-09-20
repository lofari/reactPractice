import React from 'react';
import './App.css';
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import EmployeeDetail from "./components/EmployeeDetail";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsList from "./components/ProjectsList";

const App = () => {
  return(
      <div className="ui container">
        <BrowserRouter>
          <Header/>
          <Route path="/" exact component={EmployeesList} />
          <Route path="/employee/:id" component={EmployeeDetail} />
          <Route path="/projects" component={ProjectsList} />
          <Route path="/project/" component={ProjectDetail} />
        </BrowserRouter>
      </div>
   );
}

export default App;
