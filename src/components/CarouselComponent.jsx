import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';

const CarouselComponent = ({ title }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/bestSellings').then((res) => {
            console.log(res.data.bestSellings);
            setData(res.data.bestSellings)
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);

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
                    <a className='a_tag fs-5 fw-bold' href="/products">بیشتر</a>
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
                    {
                        Array.isArray(data) ?
                            data.map((d, index) => (
                                <div key={index} className='carousel_items my-3 mx-3 rounded-5 d-flex justify-content-center align-items-center'>
                                    <img className='w-100 my-2 rounded-5 ' src={'http://localhost:4000/' + d.imageUrl[0]} alt="" />
                                    <a className='a_tag fs-5 fw-semibold main_color' href='/products'>{d.title}</a>
                                    <p className='fw-semibold carousel_content'>{d.content}</p>
                                </div>
                            )) : null
                    }

                </Carousel>
            </div>
        </div>
    )
}

export default CarouselComponent
