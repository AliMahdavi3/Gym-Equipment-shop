import React from 'react'
import { BsInstagram, BsPhone, BsTelegram, BsWhatsapp } from 'react-icons/bs'

const Blog = () => {
  return (
    <>
      {/* Blog */}
      <div className="blog">
        <div className="container">
          <div className="blog_title py-2">
            <h1 className='pb-3'>مقالات وبسایت</h1>
          </div>

          <div className="new_article">
            <div className="row">
              <div className="col-12">
                <div className="card mb-3 rounded-5 new_article_card">
                  <div className="row" style={{ "height": "100%" }}>
                    <div className="col-md-5" style={{ "height": "100%" }}>
                      <img src="/assets/images/arti.jpg" style={{ "height": "500px" }}
                        className="new_article_card img-fluid rounded-4" alt="..." />
                    </div>
                    <div className="col-md-7 text-end" style={{ "height": "100%" }}>
                      <div className="card-body">
                        <h3 className="card-title fw-semibold">جدید ترین مقاله</h3>
                        <h5 className="my-4 card-title">مقاله درباره باشگاه های بدن سازی</h5>
                        <p className="card-text fw-semibold">لورم
                          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                          و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                          روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                          شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                          هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                          شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                          برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                        </p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        <button className='btn btn-secondary fw-bold px-2'><a className='a_tag text-light' href="/">مطالعه</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog_category py-3">
            <ul className="nav d-flex justify-content-between">
              <li className="nav-item mt-2 rounded-4 btn btn-secondary">
                <a className="nav-link a_tag fw-semibold text-light" aria-current="page" href="/">دمبل</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href="/">دستگاه بدنسازی</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href="/">وزنه</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href='/'>تغذیه</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href='/'>برنامه</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href='/'>سلامت</a>
              </li>
            </ul>
          </div>

          <div className="blog_articlse">
            <div className="row">
              <div className='col-12 col-md-6 my-3'>
                <div className="card text-bg-dark rounded-5 article_border">
                  <img src="/assets/images/arti.jpg" className="card-img rounded-5" alt="article" />
                  <div className="card-img-overlay">
                    <h5 className="fw-bold card-title">Card title</h5>
                    <p className="fw-semibold card-text"><a className='a_tag text-light' href="blog/singlearticle">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</a></p>
                    <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 my-3'>
                <div className="card text-bg-dark rounded-5 article_border">
                  <img src="/assets/images/arti (2).jpg" className="card-img rounded-5" alt="article" />
                  <div className="card-img-overlay">
                    <h5 className="fw-bold card-title">Card title</h5>
                    <p className="fw-semibold card-text"><a className='a_tag text-light' href="blog/singlearticle">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</a></p>
                    <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 my-3'>
                <div className="card text-bg-dark rounded-5 article_border">
                  <img src="/assets/images/arti (3).jpg" className="card-img rounded-5" alt="article" />
                  <div className="card-img-overlay">
                    <h5 className="fw-bold card-title">Card title</h5>
                    <p className="fw-semibold card-text"><a className='a_tag text-light' href="blog/singlearticle">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</a></p>
                    <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 my-3'>
                <div className="card text-bg-dark rounded-5 article_border">
                  <img src="/assets/images/arti (4).jpg" className="card-img rounded-5" alt="article" />
                  <div className="card-img-overlay">
                    <h5 className="fw-bold card-title">Card title</h5>
                    <p className="fw-semibold card-text"><a className='a_tag text-light' href="blog/singlearticle">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</a></p>
                    <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 my-3'>
                <div className="card text-bg-dark rounded-5 article_border">
                  <img src="/assets/images/arti (2).jpg" className="card-img rounded-5" alt="article" />
                  <div className="card-img-overlay">
                    <h5 className="fw-bold card-title">Card title</h5>
                    <p className="fw-semibold card-text"><a className='a_tag text-light' href="blog/singlearticle">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</a></p>
                    <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 my-3'>
                <div className="card text-bg-dark rounded-5 article_border">
                  <img src="/assets/images/arti (3).jpg" className="card-img rounded-5" alt="article" />
                  <div className="card-img-overlay">
                    <h5 className="fw-bold card-title">Card title</h5>
                    <p className="fw-semibold card-text"><a className='a_tag text-light' href="blog/singlearticle">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</a></p>
                    <p className="fw-semibold card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex my-3 justify-content-center align-items-center'>
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
      </div>


    </>
  )
}

export default Blog
