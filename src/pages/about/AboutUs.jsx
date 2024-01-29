import React from 'react'
import Footer from '../../components/Footer';
import LandingPage from '../../components/LandingPage';
import Question from './Question';

const AboutUs = () => {
    return (
        <>
            {/* Landing Page */}
            <LandingPage dir="rtl" className="about" title="ایلیافیتنس" 
            secondTitle="درباره" thirdTitle="گارانتی محصولات , خدمات و پشتیبانی" 
            link='/products' button="محصولات" />

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
                            <h2 className='fw-bold my-3 text-center'>درباره ایلیافیتنس</h2>
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
                        <h2>خدمات شرکت ایلیافیتنس</h2>
                    </div>
                    <div className="row services_about_content_main">
                        <div className="services_about_content mt-5">
                            <img className='w-75' src="/assets/images/services (2).png" alt="" />
                            <h5 className='mt-4'>کیفیت عالی</h5>
                            <p>کیفیت عالی محصولات همراه خدمات پس از فروش</p>
                        </div>
                        <div className="services_about_content">
                            <img src="/assets/images/services (1).png" alt="" />
                            <h5>گارانتی</h5>
                            <p>گارانتی و ضمانت محصولات</p>
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
            <Question/>


            {/* Footer */}
            <Footer/>
        </>
    )
}

export default AboutUs
