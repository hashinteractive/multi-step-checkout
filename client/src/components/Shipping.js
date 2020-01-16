import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Button from './button/Button'

class Shipping extends Component{
  constructor(props){
    super(props)
    this.state = {
      route: '',
      city: '',
      state: null,
      zip: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }
  render(){
    return(
      <div className="flex flex-wrap w-full p-12 bg-white rounded shadow-lg">
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input onChange={this.handleOnChange} name="first" value={this.state.first} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input onChange={this.handleOnChange} name="last" value={this.state.last} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Email
              </label>
              <input onChange={this.handleOnChange} name="email" value={this.state.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Password
              </label>
              <input onChange={this.handleOnChange} name="password" value={this.state.password} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>
        </form> 
        <div className="flex justify-between w-full self-end mt-12">
          <Link to="/shipping">
            <Button type={'btn-gray'}>
              Shipping
            </Button>
          </Link>
          <Link onClick={this.props.submit.bind(null, {...this.state} , 'PATCH')} to="/payment">
            <Button type={'btn-blue'}>
              Payment
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Shipping 