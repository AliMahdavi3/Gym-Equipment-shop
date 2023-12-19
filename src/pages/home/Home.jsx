import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import Footer from '../../components/Footer';
import CarouselComponent from '../../components/CarouselComponent';
import LandingPage from '../../components/LandingPage';

const Home = () => {
  return (
    <section>

      {/* Landing Page */}
      <LandingPage className="home" title="ایلیافیتنس" secondTitle="تجهیزات بدنسازی" 
      thirdTitle="بروزترین و با کیفیت ترین تجهیزات بدنسازی" button="محصولات"/>

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
      <CarouselComponent title="پرفروشترین محصولات"/>

      {/* About Us */}
      <div className="about_us">
        <div className="container">
          <div className="row d-flex py-5 justify-content-center align-items-center">
            <div className='w-50 justify-content-center d-flex col-12 col-md-6'>
              <img className='w-75 rounded-5' src="/assets/images/about-1.jpg" alt="" />
            </div>
            <div className='col-12 col-md-6 text-center'>
              <h2 className='fw-bold mt-2'>درباره ما</h2>
              <p className='py-3 fw-semibold'>ل
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
                رار گی
                رد.
              </p>
              <button className='btn btn-light rounded-3 shadow-lg'><a className='a_tag text-dark fw-semibold' href="/">مطالعه بیشتر</a></button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <CarouselComponent title="جدیدترین محصولات"/>

      {/* Articles */}
      <div className="article pt-3 pb-5">
        <div className="container">
          <div className='d-flex title_font pt-3 justify-content-between align-items-center'>
            <a className='a_tag fs-5 fw-bold' href="/">بیشتر</a>
            <h2 className='fw-bold'>مقالات وبسایت</h2>
          </div>
          <div className="row">
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti.jpg" className="card-img rounded-5" alt="article" />
                <div dir='rtl' className="card-img-overlay">
                  <h5 className="fw-bold card-title">مقاله جدید</h5>
                  <p className="fw-semibold card-text">سلام خدمت تمامی دوستان و همراهان محترم سایت آموزشی فری لرن ، امیدوارم که حال همگیتون خوب باشه. لطفا</p>
                  <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti (2).jpg" className="card-img rounded-5" alt="article" />
                <div dir='rtl' className="card-img-overlay">
                  <h5 className="fw-bold card-title">مقاله جدید</h5>
                  <p className="fw-semibold card-text">سلام خدمت تمامی دوستان و همراهان محترم سایت آموزشی فری لرن ، امیدوارم که حال همگیتون خوب باشه. لطفا</p>
                  <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti (3).jpg" className="card-img rounded-5" alt="article" />
                <div dir='rtl' className="card-img-overlay">
                  <h5 className="fw-bold card-title">مقاله جدید</h5>
                  <p className="fw-semibold card-text">سلام خدمت تمامی دوستان و همراهان محترم سایت آموزشی فری لرن ، امیدوارم که حال همگیتون خوب باشه. لطفا</p>
                  <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti (4).jpg" className="card-img rounded-5" alt="article" />
                <div dir='rtl' className="card-img-overlay">
                  <h5 className="fw-bold card-title">مقاله جدید</h5>
                  <p className="fw-semibold card-text">سلام خدمت تمامی دوستان و همراهان محترم سایت آموزشی فری لرن ، امیدوارم که حال همگیتون خوب باشه. لطفا</p>
                  <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* comments of customers */}
      <div className="about_us">
        <div className="container">
          <div className="row d-flex py-5 justify-content-center align-items-center">
            <div className='w-50 justify-content-center d-flex col-12 col-md-6'>
              <img className='w-75 rounded-5' src="/assets/images/arti.jpg" alt="" />
            </div>
            <div className='col-12 col-md-6 text-center'>
              <h2 className='fw-bold mt-2'>نظر مشتریان درباره ایلیافیتنس</h2>
              <p className='py-3 fw-semibold'>ل
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
                رار گی
                رد.
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
              <h6 className='fw-semibold'>ضمانت و گارانتی دستکاه ها تا 5 سال</h6>
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
