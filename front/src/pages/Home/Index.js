import React from 'react'
import Slider from './Slider/index';
import Product from '../../Components/Product';
import "./style.css"

const Home = () => {
  return (
    <div>
      <Slider/>
      <div className='product-container'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>  

      </div>
    </div>
  )
}

export default Home