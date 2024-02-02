import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import Footer from '../../components/Footer';
import CarouselComponent from '../../components/CarouselComponent';
import LandingPage from '../../components/LandingPage';
import CarouselNewProducts from '../../components/CarouselNewProducts';
import Articles from './Articles';

const Home = () => {
  return (
    <section>

      {/* Landing Page */}
      <LandingPage className="home" title="ایلیافیتنس" secondTitle="تجهیزات بدنسازی"
        thirdTitle="بروزترین و با کیفیت ترین تجهیزات بدنسازی" link='/products' button="محصولات" />

      {/* Category */}
      <div className='d-block'>
        <div className='home_category d-flex justify-content-center align-items-center'>
          <div className='row home_category_child container d-flex justify-content-between align-items-center'>
            <div className='category_icone text-center mt-3'>
              <div>
                <img className='w-100 rounded-4 py-2 px-2' src="/assets/images/cat (3).png" alt="" />
              </div>
              <p className='fw-semibold'>فروشگاه</p>
            </div>
            <div className='category_icone text-center mt-3'>
              <div>
                <img className='w-100 rounded-4' src="/assets/images/cat (1).png" alt="" />
              </div>
              <p className='fw-semibold'>تجهیزات کاربردی</p>
            </div>
            <div className='category_icone text-center mt-3'>
              <div>
                <img className='w-100 rounded-4 py-3 px-1' src="/assets/images/cat (2).png" alt="" />
              </div>
              <p className='fw-semibold'>ماشین کاردیو</p>
            </div>
            <div className='category_icone text-center mt-3'>
              <div>
                <img className='w-100 rounded-4' src="/assets/images/cat (4).png" alt="" />
              </div>
              <p className='fw-semibold'>وزنه های آزاد</p>
            </div>
            <div className='category_icone text-center mt-3'>
              <div>
                <img className='w-100 rounded-4' src="/assets/images/cat (5).png" alt="" />
              </div>
              <p className='fw-semibold'>لوازم بدنسازی</p>
            </div>
            <div className='category_icone text-center mt-3'>
              <div>
                <img className='w-100 rounded-4' src="/assets/images/cat (6).png" alt="" />
              </div>
              <p className='fw-semibold'>دستگاه تمرین قدرتی</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <CarouselComponent title="پرفروشترین محصولات" />

      {/* About Us */}
      <div className="about_us">
        <div className="container">
          <div className="row d-flex py-5 justify-content-center align-items-center">
            <div className='w-50 justify-content-center d-flex col-12 col-md-6'>
              <img className='w-75 rounded-5' src="/assets/images/about-1.jpg" alt="" />
            </div>
            <div className='col-12 col-md-6 text-center'>
              <h2 className='fw-bold mt-2'>درباره ما</h2>
              <p className='py-3 fw-semibold'>
                "ما یک تولید کننده تجهیزات بدنسازی مستقر در ایران هستیم. شرکت ما در
                سال 1397 تاسیس شد و از آن زمان تاکنون تجهیزات بدنسازی با کیفیت بالا
                را در اختیار مشتریان خود قرار داده ایم. ماموریت ما ساخت بهترین
                تجهیزات ورزشی ممکن و در دسترس قرار دادن آن برای همه ما به کار خود
                افتخار می کنیم و تلاش می کنیم از انتظارات مشتریان خود فراتر برویم.
                چه یک ورزشکار حرفه ای باشید و چه به تازگی سفر تناسب اندام خود را
                شروع کرده اید، ما تجهیزات مورد نیاز برای رسیدن به اهداف خود را داریم.
                از اینکه ما را به عنوان شریک خود انتخاب کردید متشکریم
              </p>
              <button className='btn btn-light rounded-3 shadow-lg'><a className='a_tag text-dark fw-semibold' href="/aboutus">مطالعه بیشتر</a></button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <CarouselNewProducts title="جدیدترین محصولات" />

      {/* Articles */}
      <Articles />

      {/* comments of customers */}
      <div className="about_us">
        <div className="container">
          <div className="row d-flex py-5 justify-content-center align-items-center">
            <div className='w-50 justify-content-center d-flex col-12 col-md-6'>
              <img className='w-75 rounded-5' src="/assets/images/arti.jpg" alt="" />
            </div>
            <div className='col-12 col-md-6 text-center'>
              <h2 className='fw-bold mt-2'>نظر مشتریان درباره ایلیافیتنس</h2>
              <p className='py-3 fw-semibold'>
                به عنوان یک مشتری که از ایلیافیتنس
                تجهیزات بدنسازی را خریداری کرده ام، باید بگویم که از تجربه خود بی نهایت
                راضی هستم. کیفیت تجهیزات فوق العاده است و از حد انتظار من فراتر رفته است.
                خدمات مشتری ارائه شده نیز استثنایی بود، با پاسخ های سریع و مفید به تمام
                سوالات من. فرآیند تحویل نرم و کارآمد بود و تجهیزات در شرایط عالی رسید.
                به طور کلی، من به شدت کسب و کار ایلیافیتنس را به هر کسی که به دنبال تجهیزات باشگاه
                با کیفیت بالا و خدمات مشتری عالی است توصیه می کنم. به کار عالی ادامه دهید!
                <span className='text-light mx-2'>علیرضا صحرارو</span>
              </p>
              <div>
                <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                  <li className='mx-2'><BsStarFill className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStarFill className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStarFill className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStarFill className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStarFill className='fs-5 fw-bold' /></li>
                  <p className='fw-semibold'>4/5</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='services_home py-5 bg-light'>
        <div className="container">
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='text-center col-12 col-md-6 col-lg-4'>
              <h5 className='fw-semibold pb-2 main_color'>ارسال به تمام نقاط کشور
                و خارج از کشور</h5>
              <h6 className='fw-semibold'>ارسال به تمامی نقاط ایران و
                خارج از کشور</h6>
            </div>
            <div className='text-center col-12 col-md-6 col-lg-4'>
              <h5 className='fw-semibold pb-2 main_color'>پشتیبانی 24 ساعته</h5>
              <h6 className='fw-semibold'>پشتیبانی 24 ساعته در
                7 روز هفته </h6>
            </div>
            <div className='text-center col-12 col-md-6 col-lg-4'>
              <h5 className='fw-semibold pb-2 main_color'>30 سال ضمانت پس از فروش</h5>
              <h6 className='fw-semibold'>ضمانت و گارانتی تمامی دستگاه ها</h6>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}

export default Home
