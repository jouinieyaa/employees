import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './Common/Components/HeaderComponent';
import HeaderComponent from './Common/Components/HeaderComponent';
import FooterComponent from './Common/Components/FooterComponent';
import CreateEmployeeComponent from './Common/Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Common/Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Common/Components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;