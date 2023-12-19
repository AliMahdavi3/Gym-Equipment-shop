import React from 'react'
import { BsInstagram, BsPhone, BsTelegram, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
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
            <h3 className='fs-1 main_color fw-bold pt-5'>iliafitness.com</h3>
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
  )
}

export default Footer
