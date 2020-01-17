import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Checkout from './Checkout'
import Signup from './Signup'
import Shipping from './Shipping'

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: {
        address: {
            route: "",
            city: "",
            state: "",
            zip: 54321,
            phone: 5555555555
        },
        card: {
            number: 4111111111111111,
            cvv: 123,
            zip: 54321,
            expires: "2020-01-16T23:18:49.211Z"
        },
        first: "",
        last: "",
        email: "",
        password: ""
      },
      method: 'POST'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(data, method, route){
    return new Promise((resolve, reject) => {
      this.setState({ method }, async () => {
        let response = await fetch('http://localhost:3333/api/user', {
          method: this.state.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())

        const user = {...response}
        this.setState({ user }, resolve)
      })
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
                  <Signup user={this.state.user} submit={this.handleSubmit} />
                </Route>
                <Route exact path="/shipping">
                  <Shipping user={this.state.user} submit={this.handleSubmit} />
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