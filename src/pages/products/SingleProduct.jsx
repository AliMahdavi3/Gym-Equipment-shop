import React from 'react'
import { BsCircleFill, BsInstagram, BsPhone, BsTelegram, BsWhatsapp } from "react-icons/bs";

const SingleProduct = () => {
    return (
        <>
            {/* Breadcrumb */}
            <div className='breadcrumb'>
                <div className="container">
                    <div>
                        <nav dir='rtl' className='breadcrumb pt-3' aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="fw-semibold breadcrumb-item ms-2"><a className='a_tag ms-2' href="/products/singleproduct">محصولات</a>/</li>
                                <li className="fw-semibold breadcrumb-item"><a className='a_tag' href="/products/singleproduct">بدنسازی</a></li>
                                <li className="fw-semibold breadcrumb-item active" aria-current="page">دستگاه هالتر</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Single-Product */}
            <div className="singleProduct py-5">
                <div className="container">
                    <div className="row d-flex pb-5 singleProduct_container justify-content-center align-items-center">
                        <div className="col-12 col-md-6 d-flex align-items-center flex-column">
                            <div className='w-100 mt-2 mb-4 d-flex justify-content-center align-items-center'>
                                <img className='w-75 main_img_product' src="/assets/images/products (2).png" alt="pro" />
                            </div>
                            <div className='w-75 mt-2 d-flex justify-content-between align-items-center'>
                                <img className='w-25 side_view_img rounded-3' src="/assets/images/products (1).png" alt="pro" />
                                <img className='w-25 side_view_img rounded-3' src="/assets/images/products (3).png" alt="pro" />
                                <img className='w-25 side_view_img rounded-3' src="/assets/images/products (2).png" alt="pro" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex product_detail flex-column">
                            <h2 className='my-5'>دستگاه هالتر چندکاره</h2>
                            <p className='fw-semibold mb-5'>
                                دستگاه بدنسازی پرس سینه سیمکش مدل فیوژن آسمان فیتنس
                                دستگاه بدنسازی پرس سینه سیمکش مدل فیوژن آسمان فیتنس
                                دستگاه بدنسازی پرس سینه سیمکش مدل فیوژن آسمان فیتنس
                                دستگاه بدنسازی پرس سینه سیمکش مدل فیوژن آسمان فیتنس
                            </p>
                            <h5 className='fw-semibold'>رنگ بندی متفاوت و همچنین سفارشی</h5>
                            <ul className='list-unstyled my-4 color_font'>
                                <li className='mx-2 fs-2 text-success'><BsCircleFill /></li>
                                <li className='mx-2 fs-2 text-warning'><BsCircleFill /></li>
                                <li className='mx-2 fs-2 text-info'><BsCircleFill /></li>
                                <li className='mx-2 fs-2 text-danger'><BsCircleFill /></li>
                                <li className='mx-2 fs-2 text-secondary'><BsCircleFill /></li>
                            </ul>
                            <button className='btn order_color_1 mb-2 mt-5 w-100 py-2 fw-semibold'>
                                <a className='a_tag text-dark' href="/">ثبت سفارش</a></button>
                            <button className='btn order_color_2 my-2 w-100 py-2 fw-semibold'>
                                <a className='a_tag text-dark' href="/">تماس با پشتیبانی</a></button>
                        </div>
                    </div>
                    <p className='fw-bold mt-4'>کد کالا : FAP-134</p>
                    <p className='fw-bold'>دسته بندی : بدنسازی - سیم کش بانوان</p>
                </div>
            </div>

            {/* Footer */}
            <footer className='footer py-5'>
                <div className='container'>
                    <div className="row pt-3 d-flex justify-content-between">
                        <div className="col-12 col-md-6 col-lg-4 justify-content-between align-items-center d-flex flex-column">
                            <div className='pb-5'>
                                <a className='a_tag text-dark fs-1 me-3' href="/">
                                    <BsTelegram />
                                </a>
                                <a className='a_tag text-dark fs-1 me-3' href="/">
                                    <BsPhone />
                                </a>
                                <a className='a_tag text-dark fs-1 me-3' href="/">
                                    <BsInstagram />
                                </a>
                                <a className='a_tag text-dark fs-1 me-3' href="/">
                                    <BsWhatsapp />
                                </a>
                            </div>
                            <div className='pt-5 text-center'>
                                <p className='fs-1 main_color fw-bold pt-5'>iliafitness.com</p>
                                <p className='text-light footer_shadow fw-semibold'>سیاست حفظ حریم خصوصی و شرایط خدمات</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 align-items-end d-flex flex-column">
                            <h6 className='fs-4 pb-3 fw-bold'>پیگیری سفارش</h6>
                            <p className='text-light footer_shadow fw-semibold'>پیگیری سفرش</p>
                            <p className='text-light footer_shadow fw-semibold'>ثبت شکایت</p>
                            <p className='text-light footer_shadow fw-semibold'>راهنمایی</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 align-items-end d-flex flex-column">
                            <h6 className='fs-4 fw-bold pb-3'>شماره های تماس</h6>
                            <p className='text-light footer_shadow fw-semibold'>شماره تماس مدیر </p>
                            <a className='text-light footer_shadow fw-semibold a_tag' href="/">09012559469</a>
                            <p className='text-light footer_shadow fw-semibold'>شماره تماس دفتر فروش </p>
                            <a className='text-light footer_shadow fw-semibold a_tag' href="/">09012559469</a>
                            <p className='text-light footer_shadow fw-semibold'>شماره فکس </p>
                            <a className='text-light footer_shadow fw-semibold a_tag' href="/">09012559469</a>
                            <p className='text-light footer_shadow fw-semibold'>شماره پشتیبانی</p>
                            <a className='text-light footer_shadow fw-semibold a_tag' href="/">09012559469</a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 align-items-end d-flex flex-column">
                            <h6 className='fw-bold pb-3 fs-4'>ادرس</h6>
                            <p className='text-end text-light fw-semibold footer_shadow'>تهران. باغستان.<br />
                                باباسلمان
                                خیابان تقی کریمی پلاک 9ّ</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default SingleProduct
