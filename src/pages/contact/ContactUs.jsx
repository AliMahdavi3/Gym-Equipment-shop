import React from 'react'
import { BsInstagram, BsPhone, BsTelegram, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import Footer from '../../components/Footer'
import SendMessage from './SendMessage'

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
      <SendMessage/>

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
      <Footer/>
    </>
  )
}

export default ContactUs
