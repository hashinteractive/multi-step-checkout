import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from './button/Button'

class Shipping extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: {...props.user}
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  handleOnChange(e){
    e.persist()
    this.setState(state => ({ user: { ...state.user, address: { ...state.user.address, [e.target.name]: e.target.value } } }) )
  }
  async handleOnSubmit(e){
    await this.props.submit(this.state.user, 'PATCH')
    this.props.history.push('/payment')
  }
  render(){
    return(
      <div className="flex flex-wrap w-full p-12 bg-white rounded shadow-lg">
        <div className="w-full mb-12">
          { JSON.stringify(this.state.user) }
        </div>
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
                Address
              </label>
              <input onChange={this.handleOnChange} name="route" value={this.state.user.address.route} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="Address" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                Phone
              </label>
              <input onChange={this.handleOnChange} name="phone" value={this.state.user.address.phone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="tel" placeholder="Phone" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                City
              </label>
              <input onChange={this.handleOnChange} name="city" value={this.state.user.address.city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                State
              </label>
              <div className="relative">
                <select onChange={this.handleOnChange} name="state" value={this.state.user.address.state} className="block appearance-none h-12 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="" disabled>State</option>
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Zip
              </label>
              <input onChange={this.handleOnChange} name="zip" value={this.state.user.address.zip} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div> 
        </form> 
        <div className="flex justify-between w-full self-end mt-12">
          <Link to="/signup">
            <Button type={'btn-gray'}>
              Signup
            </Button>
          </Link>
          <span onClick={this.handleOnSubmit}>
            <Button type={'btn-blue'}>
              Payment
            </Button>
          </span> 
        </div>
      </div>
    )
  }
}

export default withRouter(Shipping) 