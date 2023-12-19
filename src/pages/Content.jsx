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

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/singleproduct" element={<SingleProduct />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/singlearticle" element={<SingleArticle />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  )
}

export default Content
