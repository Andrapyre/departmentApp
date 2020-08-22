import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import Departments from "./components/Departments"
import DepartmentForm from "./components/DepartmentForm"
import {Route, Switch, BrowserRouter} from "react-router-dom"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="red" expand="lg" className="navbar">Harvard Departments</Navbar>
        <div className="mainBody">
          <Switch>
            <Route exact path = "/" component={Departments}></Route>
            <Route exact path = "/*" component={DepartmentForm}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
