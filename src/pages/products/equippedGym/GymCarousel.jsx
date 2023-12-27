import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const GymCarousel = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/equippedGyms').then((res) => {
            console.log(res.data.equippedGyms);
            setData(res.data.equippedGyms);
        }).catch((error) => {
            console.log(error.message);
        })
    }, [])

    return (
        <div className='gym_design'>
            <div className="container">
                <h2 dir='rtl' className='fw-bold pt-3'>باشگاه هایی که توسط <span className='fs-2 text-warning'> ایلیافیتنس </span> تجهیز شده اند</h2>
                <Carousel className='pt-3 pb-5'>
                    {
                        Array.isArray(data) ?
                            data.map((d, index) => (
                                <Carousel.Item key={index} className='product_carousel' interval={2000}>
                                    <a href={`products/gymCarousel/${d._id}`}><img src={'http://localhost:4000/' + d.imageUrl[0]} alt="" /></a>
                                    <Carousel.Caption>
                                        <a href={`products/gymCarousel/${d._id}`} className='a_tag text-light fs-3 text_shadow_products'>{d.title}</a>
                                        <p className='text_shadow_products'>{d.content}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )) : null
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default GymCarousel
