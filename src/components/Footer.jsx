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
              <h3 className='fs-1 main_color fw-bold pt-5'>ILIYAFITNESS.COM</h3>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.85069623240526!2d51.12597270745763!3d35.66488278843288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8df11760ba7863%3A0xec003b368de945d6!2z2KrYrNmH24zYstin2Kog2KjYr9mG2LPYp9iy24wg2KfbjNmE24zYpyDZgduM2KrZhtiz!5e0!3m2!1sen!2s!4v1706119402977!5m2!1sen!2s"
              width="230"
              height="200"
              style={{borderRadius: '15px', border: '5px solid #d4531b'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map-location" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
