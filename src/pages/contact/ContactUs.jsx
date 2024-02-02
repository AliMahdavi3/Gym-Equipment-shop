import React from 'react'
import Footer from '../../components/Footer'
import SendMessage from './SendMessage'
import { FaInstagram, FaTelegram, FaWhatsappSquare, FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa'

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
            <a className='a_tag fs-1 text-info ms-3' href="https://t.me/+989331070565">
              <FaTelegram />
            </a>
            <a className='a_tag fs-1 main_color ms-3' href="https://www.instagram.com/iliyafitness1/">
              <FaInstagram />
            </a>
            <a className='a_tag fs-1 text-success ms-3' href="https://wa.me/+989331070565">
              <FaWhatsappSquare />
            </a>
          </div>
        </div>

      </div>

      {/* Contact-Form */}
      <SendMessage />

      {/* Contact-Ways */}
      <div className="contact_ways py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>مدیر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="tel:+989331070565">09331070565</a>
              </div>
              <FaPhoneAlt  className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>دفتر فروش</p>
                <a className="a_tag text-dark fw-semibold fs-5" href="tel:+989937171015">09937171015</a>
              </div>
              <FaPhoneAlt  className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>ایمیل</p>
                <a className="a_tag text-dark fw-semibold fs-5" 
                href="mailto:iliyafitness@gmail.com">iliyafitness@gmail.com</a>
              </div>
              <FaRegEnvelope className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>اینستاگرام</p>
                <a className="a_tag text-dark fw-semibold fs-5" 
                href="https://www.instagram.com/iliyafitness1/">iliyafitness1</a>
              </div>
              <FaInstagram className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>تلگرام</p>
                <a className="a_tag text-dark fw-semibold fs-5"
                 href="https://t.me/+989331070565">09331070565</a>
              </div>
              <FaTelegram className='fs-1' />
            </div>
            <div className="col-6 col-md-4  my-2 d-flex justify-content-around align-items-center">
              <div className='text-center'>
                <p className='fw-bold fs-4'>واتساپ</p>
                <a className="a_tag text-dark fw-semibold fs-5"
                 href="https://wa.me/+989331070565">09331070565</a>
              </div>
              <FaWhatsappSquare className='fs-1' />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default ContactUs
