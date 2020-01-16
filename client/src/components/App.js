import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="app">
        <div className="container mx-auto">
          <Router>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/">
                <h1>This is a react App.</h1>
              </Route>
              <Route exact path="/signup">
                <h1>Signup.</h1>
              </Route>
              <Route exact path="/shipping">
                <h1>Shipping.</h1>
              </Route>
              <Route exact path="/checkout">
                <h1>Checkout.</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default App