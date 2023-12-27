import React from 'react'
import Home from './home/Home'
import Products from './products/Products'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from './products/SingleProduct'
import AboutUs from './about/AboutUs'
import Blog from './blog/Blog'
import SingleArticle from './blog/SingleArticle'
import ContactUs from './contact/ContactUs'
import Login from './auth/login/Login'
import Register from './auth/register/Register'
import EquippedGym from './products/equippedGym/EquippedGym'

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<SingleProduct />} />
      <Route path="/products/gymCarousel/:equippedGymId" element={<EquippedGym />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:articleId" element={<SingleArticle />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Content
