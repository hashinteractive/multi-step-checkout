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
    this.setState(state => ({ user: { ...state.user, card: { ...state.user.card, [e.target.name]: e.target.value } } }) )
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
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                Card Number
              </label>
              <input onChange={this.handleOnChange} name="number" value={this.state.user.card.number} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-number" type="text" placeholder="4111XXXXXXXXXXXX" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-cvv">
                CVV
              </label>
              <input onChange={this.handleOnChange} name="cvv" value={this.state.user.card.cvv} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cvv" type="text" placeholder="123" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-cvv">
                Expires 
              </label>
              <input onChange={this.handleOnChange} name="expires" value={this.state.user.card.expires} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-expires" type="date" placeholder="01/01/2022" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Billing Zip
              </label>
              <input onChange={this.handleOnChange} name="zip" value={this.state.user.card.zip} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div> 
        </form> 
        <div className="flex justify-between w-full self-end mt-12">
          <Link to="/shipping">
            <Button type={'btn-gray'}>
              Shipping
            </Button>
          </Link>
          <span onClick={this.handleOnSubmit}>
            <Button type={'btn-green'}>
              Complete
            </Button>
          </span> 
        </div>
      </div>
    )
  }
}

export default withRouter(Shipping) 