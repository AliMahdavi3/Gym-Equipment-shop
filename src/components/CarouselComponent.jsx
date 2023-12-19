import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({title}) => {
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
        <div className='multi_carousel pb-2'>
            <div className="container">
                <div className='d-flex title_font pt-3 justify-content-between align-items-center'>
                    <a className='a_tag fs-5 fw-bold' href="/">بیشتر</a>
                    <h2 className='fw-bold'>{title}</h2>
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
                        <img className='w-100 my-2 rounded-5 ' src="/assets/images/products (5).png" alt="" />
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
    )
}

export default CarouselComponent
