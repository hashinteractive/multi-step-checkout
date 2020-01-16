import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Checkout from './Checkout'
import Signup from './Signup'

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: {},
      method: 'POST'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(data, method){
    this.setState({ method }, async () => {
      let response = await fetch('http://localhost:3333/api/user', {
        method: this.state.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())

      const user = {...response}
      this.setState({ user })
    })
    
  }
  render(){
    return(
      <div className="app">
        <div className="container mx-auto">
          <div className="flex flex-col items-center py-20 w-full max-w-4xl mx-auto h-screen">
            <Router>
              <ul className="flex w-full justify-around mb-12">
                <li>
                  <Link to="/">Checkout</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping</Link>
                </li>
                <li>
                  <Link to="/payment">Payment</Link>
                </li>
              </ul>
              <Switch>
                <Route exact path="/">
                  <Checkout />
                </Route>
                <Route exact path="/signup">
                  <Signup submit={this.handleSubmit} />
                </Route>
                <Route exact path="/shipping">
                  <h1>Shipping.</h1>
                </Route>
                <Route exact path="/payment">
                  <h1>Checkout.</h1>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App