import React from 'react'
import { FaInstagram, FaTelegram, FaWhatsappSquare } from "react-icons/fa";

const Icons = () => {
    return (
        <div className='main_icon'>
            <a className='a_tag fs-1 text-light ms-3' href="https://www.instagram.com/iliyafitness1/">
                <FaInstagram />
            </a>
            <a className='a_tag fs-1 text-light ms-3' href="https://wa.me/+989331070565">
                <FaWhatsappSquare />
            </a>
            <a className='a_tag fs-1 text-light ms-3' href="https://t.me/+989331070565">
                <FaTelegram />
            </a>
        </div>
    )
}

export default Icons
