import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Template from './Template/Template'
import BeerDetails from './Beers/BeerDetails'
import NoMatch from './NoMatch'

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Template} />
          <Route component={BeerDetails} path={"/details/:id"} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )//return
  }//render
}//class

export default App
