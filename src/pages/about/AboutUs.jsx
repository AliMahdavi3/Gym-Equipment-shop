import React from 'react'
import Footer from '../../components/Footer';
import LandingPage from '../../components/LandingPage';
import Question from './Question';

const AboutUs = () => {
    return (
        <>
            <LandingPage dir="rtl" className="about" title="ایلیافیتنس" 
            secondTitle="درباره" thirdTitle="گارانتی محصولات , خدمات و پشتیبانی" 
            link='/products' button="محصولات" />
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
                            <p className='py-2 fw-semibold'>
                            ایلیافیتنس یکی از پیشروترین تولید کنندگان 
                             تجهیزات باشگاه در ایران است.
                             از بدو تاسیس، ما متعهد بوده ایم که بهترین
                             تجهیزات بدنسازی را در کشور ارائه کنیم. نام تجاری ما، 
                             ایلیافیتنس نشان دهنده تعهد ما به کیفیت،
                              نوآوری و رضایت مشتری است. ما به طراحی و
                              ساخت تجهیزات خود افتخار می کنیم و دائما در
                              تلاش برای بهبود و نوآوری هستیم. ماموریت ما این 
                             است که تجهیزات ورزشی با کیفیت بالا را برای همه،
                              از ورزشکاران حرفه ای گرفته تا علاقه مندان به 
                             تناسب اندام، در دسترس قرار دهیم. از اینکه ایلیافیتنس
                              را به عنوان شریک خود در تناسب اندام انتخاب کردید سپاسگزاریم.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
            <Question/>
            <Footer/>
        </>
    )
}

export default AboutUs
