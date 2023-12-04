import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsInstagram, BsPhone, BsStar, BsTelegram, BsWhatsapp } from 'react-icons/bs'

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      {/* Landing Page */}
      <div className='home'>
        <div className="container main d-flex justify-content-between align-items-center">
          <div>
            <h2 className='text-light'>تجهیزات بدنسازی</h2>
            <h1 className='main_color'>ایلیافیتنس</h1>
            <h3 className='text-light'>بروزترین و با کیفیت ترین تجهیزات بدنسازی</h3>
            <button className='btn btn-light rounded-5 mt-4 fw-semibold'><a className='a_tag text-dark' href="/">محصولات</a></button>
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
      <div>
        <div className='multi_carousel pb-2'>
          <div className="container">
            <div className='d-flex title_font pt-3 justify-content-between align-items-center'>
              <a className='a_tag fs-5 fw-bold' href="/">بیشتر</a>
              <h3 className='fw-bold'>محصولات پر فروش</h3>
            </div>
            <Carousel className='py-3'
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              customTransition="all 2s"
              transitionDuration={2000}
              removeArrowOnDeviceType={["tablet", "mobile"]}>
              <div className='carousel_items my-3 mx-3 rounded-5 d-flex justify-content-center align-items-center'>
                <img className='w-100 my-2 rounded-5 ' src="/assets/images/more-sell (1).png" alt="" />
                <a className='a_tag fs-5 fw-semibold main_color' href="/">دستگاه هالتر</a>
                <p className='fw-semibold'>Lorem ipsum dolor sit.</p>
              </div>
              <div className='carousel_items my-3 mx-3 rounded-5 d-flex justify-content-center align-items-center'>
                <img className='w-100 my-2 rounded-5 ' src="/assets/images/more-sell (2).png" alt="" />
                <a className='a_tag fs-5 fw-semibold main_color' href="/">دمبل</a>
                <p className='fw-semibold'>Lorem ipsum dolor sit.</p>
              </div>
              <div className='carousel_items my-3 mx-3 rounded-5 d-flex justify-content-center align-items-center'>
                <img className='w-100 my-2 rounded-5 ' src="/assets/images/more-sell (3).png" alt="" />
                <a className='a_tag fs-5 fw-semibold main_color' href="/">دوچرخه</a>
                <p className='fw-semibold'>Lorem ipsum dolor sit.</p>
              </div>
            </Carousel>
          </div>

        </div>
      </div>

      {/* About Us */}
      <div className="about_us">
        <div className="container">
          <div className="row d-flex py-5 justify-content-center align-items-center">
            <div className='w-50 justify-content-center d-flex col-12 col-md-6'>
              <img className='w-75 rounded-5' src="/assets/images/about-1.jpg" alt="" />
            </div>
            <div className='col-12 col-md-6 text-center'>
              <h3 className='fw-bold mt-2'>درباره ما</h3>
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
      <div>
        <div className='multi_carousel pb-2'>
          <div className="container">
            <div className='d-flex title_font pt-3 justify-content-between align-items-center'>
              <a className='a_tag fs-5 fw-bold' href="/">بیشتر</a>
              <h3 className='fw-bold'>محصولات پر فروش</h3>
            </div>
            <Carousel className='py-3'
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              customTransition="all 2s"
              transitionDuration={2000}
              removeArrowOnDeviceType={["tablet", "mobile"]}>
              <div className='carousel_items my-3 mx-3 rounded-5 d-flex justify-content-center align-items-center'>
                <img className='w-100 my-2 rounded-5 ' src="/assets/images/more-sell (1).png" alt="" />
                <a className='a_tag fs-5 fw-semibold main_color' href="/">دستگاه هالتر</a>
                <p className='fw-semibold'>Lorem ipsum dolor sit.</p>
              </div>
              <div className='carousel_items my-3 mx-3 rounded-5 d-flex justify-content-center align-items-center'>
                <img className='w-100 my-2 rounded-5 ' src="/assets/images/more-sell (2).png" alt="" />
                <a className='a_tag fs-5 fw-semibold main_color' href="/">دمبل</a>
                <p className='fw-semibold'>Lorem ipsum dolor sit.</p>
              </div>
              <div className='carousel_items my-3 mx-3 rounded-5 d-flex justify-content-center align-items-center'>
                <img className='w-100 my-2 rounded-5 ' src="/assets/images/more-sell (3).png" alt="" />
                <a className='a_tag fs-5 fw-semibold main_color' href="/">دوچرخه</a>
                <p className='fw-semibold'>Lorem ipsum dolor sit.</p>
              </div>
            </Carousel>
          </div>

        </div>
      </div>

      {/* Articles */}
      <div className="article pt-3 pb-5">
        <div className="container">
          <div className='d-flex title_font pt-3 justify-content-between align-items-center'>
            <a className='a_tag fs-5 fw-bold' href="/">بیشتر</a>
            <h3 className='fw-bold'>مقالات وبسایت</h3>
          </div>
          <div className="row">
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti.jpg" className="card-img rounded-5" alt="article" />
                <div className="card-img-overlay">
                  <h5 className="fw-bold card-title">Card title</h5>
                  <p className="fw-semibold card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti (2).jpg" className="card-img rounded-5" alt="article" />
                <div className="card-img-overlay">
                  <h5 className="fw-bold card-title">Card title</h5>
                  <p className="fw-semibold card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti (3).jpg" className="card-img rounded-5" alt="article" />
                <div className="card-img-overlay">
                  <h5 className="fw-bold card-title">Card title</h5>
                  <p className="fw-semibold card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 my-3'>
              <div className="card text-bg-dark rounded-5 article_border">
                <img src="/assets/images/arti (4).jpg" className="card-img rounded-5" alt="article" />
                <div className="card-img-overlay">
                  <h5 className="fw-bold card-title">Card title</h5>
                  <p className="fw-semibold card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
              <h3 className='fw-bold mt-2'>درباره ما</h3>
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
                  <li className='mx-2'><BsStar className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStar className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStar className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStar className='text-warning fw-bold fs-5' /></li>
                  <li className='mx-2'><BsStar className='fs-5 fw-bold' /></li>
                  <p className='fw-semibold'>4.5</p>
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

export default Home
