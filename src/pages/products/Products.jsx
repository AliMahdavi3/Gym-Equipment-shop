import React from 'react'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaWhatsappSquare } from "react-icons/fa";
import Footer from '../../components/Footer';
import ProductsSection from './ProductsSection';
import GymCarousel from './equippedGym/GymCarousel';
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Products = () => {

    

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
                        <a className='a_tag fs-1 text-info ms-3' href="/">
                            <BsTelegram />
                        </a>
                        <a className='a_tag fs-1 main_color ms-3' href="/">
                            <BsInstagram />
                        </a>
                        <a className='a_tag fs-1 text-dark ms-3' href="/">
                            <FaWhatsappSquare />
                        </a>
                    </div>
                </div>
            </div>

            {/* Slider */}
           <GymCarousel/>

            {/* Products-Section */}
            <div className="products_section">
                <div className="container">
                    <div className='pb-5 d-flex justify-content-center align-items-center'>
                        <input type="text" className='form-control rounded-5 text-end pe-3 fw-semibold ms-3' placeholder='جستجوی محصول' />
                    </div>
                    <div className='d-flex justify-content-center main_products_div'>
                        <div className='more_view_products text-center py-4 mb-5 rounded-4'>
                            <h6 className='fw-bold'>دستگاه بندسازی بانوان</h6>
                            <hr />
                            <ul className="list-unstyled">
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                            </ul>
                        </div>
                        <ProductsSection/>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Products
