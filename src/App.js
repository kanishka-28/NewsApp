import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import News from './Components/Pages/News'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/">
              <News exact pageSize={2} key="general"country={"in"} category={"general"}/>
            </Route>
            <Route path="/technology">
              <News exact pageSize={2} key="technology"country={"in"} category={"technology"}/>
            </Route>
            <Route path="/business">
              <News exact pageSize={2} key="business"country={"in"} category={"business"}/>
            </Route>
            <Route path="/entertainment">
              <News exact pageSize={10} key="entertainment"country={"in"} category={"entertainment"}/>
            </Route>
            <Route path="/health">
              <News exact pageSize={2} key="health"country={"in"} category={"health"}/>
            </Route>
            <Route path="/science">
              <News exact pageSize={2} key="science"country={"in"} category={"science"}/>
            </Route>
            <Route path="/sports">
              <News exact pageSize={2} key="sports"country={"in"} category={"sports"}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}







