import React, { useEffect, useState } from 'react'
import { BsCircleFill } from "react-icons/bs";
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


const SingleProduct = () => {
    let { productId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.iliyafitness.com/api/product/${productId}`).then((res) => {
            setData(res.data);
        }).catch((error) => {
            swal({
                title: "خطایی رخ داده!",
                text: error.message,
                icon: "warning",
                button: "متوجه شدم",
            });        });
    }, [productId]);



    return (
        <>
            {
                !data ? (
                    <h1 className='text-center mt-5 fw-bold'>درحال بارگذاری....!</h1>
                ) : (
                    <div className="singleProduct py-5">
                        <div className="container pt-5">
                            <div className="row d-flex pb-5 singleProduct_container justify-content-center align-items-center">
                                <div className="col-12 col-md-6 d-flex align-items-center flex-column">
                                    <div className='w-100 mt-2 mb-4 d-flex justify-content-center align-items-center'>
                                        <img className='w-75 main_img_product' src={'https://api.iliyafitness.com/' + data.product.imageUrl[0]} alt="pro" />
                                    </div>
                                    <div className='w-75 mt-2 d-flex justify-content-between align-items-center'>
                                        <img className='w-25 side_view_img rounded-3' src={'https://api.iliyafitness.com/' + data.product.imageUrl[1]} alt="pro" />
                                        <img className='w-25 side_view_img rounded-3' src={'https://api.iliyafitness.com/' + data.product.imageUrl[2]} alt="pro" />
                                        <img className='w-25 side_view_img rounded-3' src={'https://api.iliyafitness.com/' + data.product.imageUrl[3]} alt="pro" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 d-flex product_detail flex-column">
                                    <h2 className='my-5'>{data.product.title}</h2>
                                    <p className='fw-semibold mb-5'>
                                        {data.product.content}
                                    </p>
                                    <h5 className='fw-semibold'>رنگ بندی متفاوت و سفارشی</h5>
                                    <ul className='list-unstyled my-4 color_font'>
                                        <li className='mx-2 fs-2 text-success'><BsCircleFill /></li>
                                        <li className='mx-2 fs-2 text-warning'><BsCircleFill /></li>
                                        <li className='mx-2 fs-2 text-info'><BsCircleFill /></li>
                                        <li className='mx-2 fs-2 text-danger'><BsCircleFill /></li>
                                        <li className='mx-2 fs-2 text-secondary'><BsCircleFill /></li>
                                    </ul>
                                    <a className="btn order_color_1 mb-2 mt-5 w-100 py-2 
                                    fw-semibold text-dark a_tag" href="tel:+989331070565">09331070565 : ثبت سفارش</a>
                                    <a className='btn order_color_2 my-2 w-100 py-2 
                                    fw-semibold a_tag text-dark' href="tel:+989331070565">تماس با پشتیبانی</a>
                                </div>
                            </div>
                            <p className='fw-bold mt-4'>{data.product.productCode} : <span className='text-success fw-bold'>کد کالا </span></p>
                            <p className='fw-bold'><span className='text-danger fw-bold'>دسته بندی </span>: {data.product.category}</p>
                        </div>
                    </div>
                )
            }

            {/* Footer */}
            <Footer />
        </>

    )
}

export default SingleProduct
