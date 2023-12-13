import React from 'react'
import { BsInstagram, BsPhone, BsTelegram, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'

const ContactUs = () => {
  return (
    <>
      {/* Landing Page */}
      <div className='contact_landing_page'>
        <div className="container main_contact d-flex justify-content-center flex-column align-items-center">
          <div>
            <h2 className='main_color'>راه های ارتباطی با ما</h2>
          </div>
          <div className='main_icon_content'>
            <a className='a_tag fs-1 text-info ms-3' href="/">
              <BsTelegram />
            </a>
            <a className='a_tag fs-1 main_color ms-3' href="/">
              <BsInstagram />
            </a>
            <a className='a_tag fs-1 text-success ms-3' href="/">
              <BsWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Contact-Form */}
      <div className="contact_form py-5">
        <div className="container">
          <div className="row mt-5 px-3 py-5 rounded-5 form_shadow_2 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <img className='w-75 border border-3 rounded-circle' src="/assets/images/mult (5).jpg" alt="" />
            </div>
            <div className="col-12 col-md-6 mt-4 flex-column d-flex">
              <h5 className='text-center'>ثبت درخواست</h5>
              <input className='text-end fw-semibold px-3 border border-0 rounded-3 mb-3 py-2 form_shadow' placeholder='ایمیل' type="text" name="" id="" />
              <input className='text-end fw-semibold px-3 border border-0 rounded-3 mb-3 py-2 form_shadow' placeholder="نام کاربری" type="text" name="" id="" />
              <textarea className='text-end fw-semibold px-3 border border-0 rounded-3 mb-3 py-2 form_shadow' placeholder="پیام" name="" id="" cols="30" rows="10"></textarea>
              <button className='btn btn-primary rounded-5 text-light fw-bold'>ثبت</button>
            </div>
          </div>
        </div>
      </div>


      {/* Contact-Ways */}
      <div className="contact_ways py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>مدیر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="/">09012559469</a>
              </div>
              <BsTelephoneFill className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>مدیر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="/">09012559469</a>
              </div>
              <BsTelephoneFill className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>مدیر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="/">09012559469</a>
              </div>
              <BsTelephoneFill className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>مدیر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="/">09012559469</a>
              </div>
              <BsTelegram className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>مدیر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="/">09012559469</a>
              </div>
              <BsWhatsapp className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>مدیر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="/">09012559469</a>
              </div>
              <BsInstagram className='fs-1' />
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

export default ContactUs
