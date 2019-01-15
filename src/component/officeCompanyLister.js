import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import OfficeList from '../container/addOffice/officeList'
import Home from '../pages/Home'

export default class OfficeCompanySwitch extends Component {
  render(){
    return(
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/officeLister/:name" component={OfficeList}></Route>
          </Switch>
        </Router>
    )
  }
}

