import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button/Button'

const Checkout = (props) => {
  return(
    <div className="flex w-full justify-center p-12 bg-white rounded shadow-lg">
      <Link to="/signup">
        <Button type={'btn-blue'}>
          Get Started
        </Button>
      </Link>
    </div>
  )
}

export default Checkout