import React from 'react'
import Icons from './Icons'

const LandingPage = ({ className, title, link, secondTitle, thirdTitle, button, dir }) => {
    return (
        <div dir={dir} className={className}>
            <div className="container main d-flex justify-content-between align-items-center">
                <div>
                    <h2 className='text-warning fw-bold fs-1'>{secondTitle}</h2>
                    <h1 className='main_color'>{title}</h1>
                    <h3 className='text-light mt-4'>{thirdTitle}</h3>
                    <button className='btn btn-light rounded-5 mt-4 px-3 border border-4 border-danger fw-semibold'>
                        <a className='a_tag text-dark' href={link}>{button}</a></button>
                </div>
                <Icons />
            </div>
        </div>
    )
}

export default LandingPage
