import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { BsInstagram, BsPhone, BsStar, BsTelegram, BsWhatsapp } from 'react-icons/bs'

const AboutUs = () => {
    return (
        <>
            {/* Landing Page */}
            <div dir='rtl' className='about'>
                <div className="container main_about d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className='text-warning fw-bold fs-1'>درباره</h2>
                        <h1 className='main_color'>ایلیافیتنس</h1>
                        <h3 className='text-light mt-4'>خدمات و پشتیبانی. گارانتی</h3>
                        <button className='btn btn-light rounded-5 mt-4 px-3 border border-4 border-danger fw-semibold'>
                            <a className='a_tag text-dark' href="/">مشاهده بیشتر</a></button>
                    </div>
                    <div className='main_icon'>
                        <a className='a_tag fs-1 main_color ms-3' href="/">
                            <BsTelegram />
                        </a>
                        <a className='a_tag fs-1 main_color ms-3' href="/">
                            <BsInstagram />
                        </a>
                        <a className='a_tag fs-1 main_color ms-3' href="/">
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            {/* About us */}
            <div className="about_us_page py-5">
                <div className="container">
                    <div className="row d-flex py-5 justify-content-center align-items-center">
                        <div className='w-50 pb-5 about_img justify-content-center d-flex col-12 col-md-6'>
                            <img className='about_img_2 rounded-4' src="/assets/images/products.jpg" alt="" />
                            <img className='about_img_3 rounded-4' src="/assets/images/about-page.jpg" alt="" />
                            <img className='about_img_1 rounded-4' src="/assets/images/about-1.jpg" alt="" />
                        </div>
                        <div className='col-12 col-md-6 about_text'>
                            <h3 className='fw-bold my-3 text-center'>درباره ایلیافیتنس</h3>
                            <p className='py-2 fw-semibold'>ل
                                ورم ایپسوم متن ساختگی با تولید س
                                نامفهوم از صنعت چاپ، و با استفا
                                ده از طراحان گرافیک است، چاپگره
                                ا و متون بلکه روزنامه و مجله در
                                ستون و سطرآنچنان که لازم است، و
                                برای شرایط فعلی تکنولوژی مورد نیاز، و
                                کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد، کتابهای زیادی در شصت
                                و سه درصد گذشته حال و آینده، شناخت فر
                                اوان جامعه و متخصصان را می طلبد، تا ب
                                ا نرم افزارها شناخت بیشتری را برای طر
                                ده از طراحان گرافیک است، چاپگره
                                ا و متون بلکه روزنامه و مجله در
                                ستون و سطرآنچنان که لازم است، و
                                برای شرایط فعلی تکنولوژی مورد نیاز، و
                                کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد، کتابهای زیادی در شصت
                                و سه درصد گذشته حال و آینده، شناخت فر
                                اوان جامعه و متخصصان را می طلبد، تا ب
                                ا نرم افزارها شناخت بیشتری را برای طر
                                رار گی
                                رد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="services_about_page py-5">
                <div className="container">
                    <div className="services_about_title text-center pt-3">
                        <h3>خدمات شرکت ایلیافیتنس</h3>
                    </div>
                    <div className="row services_about_content_main">
                        <div className="services_about_content mt-5">
                            <img className='w-75' src="/assets/images/services (2).png" alt="" />
                            <h5 className='mt-4'>قیمت مناسب</h5>
                            <p>تضمین قیمت مناسب برای راه اندازی باشگاه</p>
                        </div>
                        <div className="services_about_content">
                            <img src="/assets/images/services (1).png" alt="" />
                            <h5>قیمت مناسب</h5>
                            <p>تضمین قیمت مناسب برای راه اندازی باشگاه</p>
                        </div>

                        <div className="services_about_content mt-2">
                            <img src="/assets/images/services (3).png" alt="" />
                            <h5 className='mt-2'>قیمت مناسب</h5>
                            <p>تضمین قیمت مناسب برای راه اندازی باشگاه</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Common-Questions */}
            <div className="common_questions">
                <div className="container">
                    <div className="common_questions_title">
                        <h3 className='text-center py-5'>سوالات متداول</h3>
                    </div>
                    <div>
                        <Accordion defaultActiveKey={['0']}>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="0">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="1">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="2">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="3">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="4">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="5">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="6">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="7">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="8">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='mb-3 rounded-5' eventKey="9">
                                <Accordion.Header>بهترین دستگاه برای تمرین در منزل</Accordion.Header>
                                <Accordion.Body className='rounded-5 fw-semibold fs-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
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

export default AboutUs
