import React from 'react'
import Home from './home/Home'
import Products from './products/Products'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from './products/SingleProduct'

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/singleproduct" element={<SingleProduct />} />
    </Routes>
  )
}

export default Content
