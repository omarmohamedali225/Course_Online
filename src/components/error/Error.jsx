import React from 'react'
import './Error.css'
import errorImg from '../../images/error.png'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className="container errorPage">
      <img src={errorImg} alt={errorImg} className='img-fluid' />
      <h1>Error Page 404</h1>
      <Link to={'/'}>Back</Link>
    </div>
  )
}

export default Error