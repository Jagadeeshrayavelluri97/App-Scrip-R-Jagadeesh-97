/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <Link to="/">All Products</Link>
      <Link to="/category/electronics">Electronics</Link>
      <Link to="/category/jewelry">Jewelry</Link>
      <Link to="/category/men's clothing">Men s Clothing</Link>
      <Link to="/category/women's clothing">Women s Clothing</Link>{' '}
    </div>
  )
}

export default Sidebar
