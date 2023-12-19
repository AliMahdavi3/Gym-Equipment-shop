import React from 'react'
import { BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs'

const LandingPage = ({ className, title, secondTitle, thirdTitle, button, dir }) => {
    return (
        <div dir={dir} className={className}>
            <div className="container main d-flex justify-content-between align-items-center">
                <div>
                    <h2 className='text-warning fw-bold fs-1'>{secondTitle}</h2>
                    <h1 className='main_color'>{title}</h1>
                    <h3 className='text-light mt-4'>{thirdTitle}</h3>
                    <button className='btn btn-light rounded-5 mt-4 px-3 border border-4 border-danger fw-semibold'>
                        <a className='a_tag text-dark' href="/">{button}</a></button>
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
    )
}

export default LandingPage
