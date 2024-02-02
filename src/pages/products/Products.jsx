import React, { useState } from 'react'
import { FaInstagram, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import Footer from '../../components/Footer';
import ProductsSection from './ProductsSection';
import GymCarousel from './equippedGym/GymCarousel';
import Category from './Category';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');


    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    }

    return (
        <>
            {/* Landing Page */}
            <div className='product_landing_page'>
                <div className="container main_products d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className='text-light mt-2'>ارسال سفارشات به تمامی نقاط کشور و خارج از کشور</h2>
                        <h1 className='mt-2 mb-4 main_color'>تجهیزات بدنسازی </h1>
                        <h3 className='text-warning'>برای باشگاه و منزل</h3>
                    </div>
                    <div className='main_icon_products'>
                        <a className='a_tag fs-1 text-info ms-3' href="https://t.me/+989331070565">
                            <FaTelegram />
                        </a>
                        <a className='a_tag fs-1 main_color ms-3' href="https://www.instagram.com/iliyafitness1/">
                            <FaInstagram />
                        </a>
                        <a className='a_tag fs-1 text-dark ms-3' href="https://wa.me/+989331070565">
                            <FaWhatsappSquare />
                        </a>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <GymCarousel />

            {/* Products-Section */}
            <div className="products_section">
                <div className="container">
                    {/* search-box */}
                    <div className='pb-5 d-flex justify-content-center align-items-center'>
                        <input type="text" 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='form-control rounded-5 text-end pe-3 fw-semibold ms-3' placeholder='جستجوی محصول' />
                    </div>

                    <div className='main_product_column d-flex align-items-start justify-content-center'>
                        <Category onCategorySelect={handleCategorySelect} />
                        <ProductsSection selectedCategory={selectedCategory} searchTerm={searchTerm}/>
                    </div>
                  
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Products
