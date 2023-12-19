import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaWhatsappSquare } from "react-icons/fa";
import Footer from '../../components/Footer';

const Products = () => {
    return (
        <>
            {/* Landing Page */}
            <div className='product_landing_page'>
                <div className="container main_products d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className='text-light mt-2'>ارسال سفارشات به تمامی نقاط کشور و خارج از کشور</h2>
                        <h1 className='mt-2 mb-4 main_color'>تجهیزات بدنسازی </h1>
                        <h3 className='text-warning'>برای باشگاه و منزل</h3>
                    </div>
                    <div className='main_icon_products'>
                        <a className='a_tag fs-1 text-info ms-3' href="/">
                            <BsTelegram />
                        </a>
                        <a className='a_tag fs-1 main_color ms-3' href="/">
                            <BsInstagram />
                        </a>
                        <a className='a_tag fs-1 text-dark ms-3' href="/">
                            <FaWhatsappSquare />
                        </a>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <div className='gym_design'>
                <div className="container">
                    <h2 dir='rtl' className='fw-bold pt-3'>باشگاه هایی که توسط
                        <span className='fs-2 text-warning'> ایلیافیتنس </span> تجهیز شده اند</h2>
                    <Carousel className='pt-3 pb-5'>
                        <Carousel.Item className='product_carousel' interval={1000}>
                            <img src="/assets/images/slide-gym.jpg" alt="" />
                            <Carousel.Caption>
                                <a href="/" className='a_tag text-light fs-3 text_shadow_products'>First slide label</a>
                                <p className='text_shadow_products'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='product_carousel' interval={500}>
                            <img src="/assets/images/slide-gym.jpg" alt="" />
                            <Carousel.Caption>
                                <a href="/" className='a_tag text-light fs-3 text_shadow_products'>Second slide label</a>
                                <p className='text_shadow_products'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='product_carousel'>
                            <img src="/assets/images/slide-gym.jpg" alt="" />
                            <Carousel.Caption>
                                <a href="/" className='a_tag text-light fs-3 text_shadow_products'>Third slide label</a>
                                <p className='text_shadow_products'>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            {/* Products-Section */}
            <div className="products_section">
                <div className="container">
                    <div className='pb-5 d-flex justify-content-center align-items-center'>
                        <button className='btn px-5 rounded-5 main_color_bg text-light fw-semibold'>جستجو</button>
                        <input type="text" className='form-control rounded-5 text-end pe-3 fw-semibold ms-3' placeholder='جستجوی محصول' />
                    </div>
                    <div className='d-flex justify-content-center main_products_div'>
                        <div className='more_view_products text-center py-4 mb-5 rounded-4'>
                            <h6 className='fw-bold'>دستگاه بندسازی بانوان</h6>
                            <hr />
                            <ul className="list-unstyled">
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                                <li className='mb-3'><a className='a_tag text-dark' href="/">دستگاه بندسازی بانوان</a></li>
                            </ul>
                        </div>
                        <div className='row d-flex justify-content-center align-items-center mx-2 products pb-4 rounded-4 mb-3'>
                            <div className="products_card mx-2 my-2 col-12 col-md-4">
                                <Card className='card_pro' style={{ width: "15rem" }}>
                                    <Card.Img style={{ height: "14rem" }} variant="top" src="/assets/images/products (1).png" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button className="main_color_bg border-0 fw-semibold">
                                            <a className='a_tag text-light' href="products/singleproduct">
                                            جزیئات بیشتر
                                            </a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="products_card mx-2 my-2 col-12 col-md-4">
                                <Card className='card_pro' style={{ width: "15rem" }}>
                                    <Card.Img style={{ height: "14rem" }} variant="top" src="/assets/images/products (2).png" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button className="main_color_bg border-0 fw-semibold">
                                            <a className='a_tag text-light' href="products/singleproduct">
                                            جزیئات بیشتر
                                            </a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="products_card mx-2 my-2 col-12 col-md-4">
                                <Card className='card_pro' style={{ width: "15rem" }}>
                                    <Card.Img style={{ height: "14rem" }} variant="top" src="/assets/images/products (3).png" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button className="main_color_bg border-0 fw-semibold">
                                            <a className='a_tag text-light' href="products/singleproduct">
                                            جزیئات بیشتر
                                            </a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="products_card mx-2 my-2 col-12 col-md-4">
                                <Card className='card_pro' style={{ width: "15rem" }}>
                                    <Card.Img style={{ height: "14rem" }} variant="top" src="/assets/images/products (4).png" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button className="main_color_bg border-0 fw-semibold">
                                            <a className='a_tag text-light' href="products/singleproduct">
                                            جزیئات بیشتر
                                            </a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="products_card mx-2 my-2 col-12 col-md-4">
                                <Card className='card_pro' style={{ width: "15rem" }}>
                                    <Card.Img style={{ height: "14rem" }} variant="top" src="/assets/images/products (5).png" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button className="main_color_bg border-0 fw-semibold">
                                            <a className='a_tag text-light' href="products/singleproduct">
                                            جزیئات بیشتر
                                            </a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="products_card mx-2 my-2 col-12 col-md-4">
                                <Card className='card_pro' style={{ width: "15rem" }}>
                                    <Card.Img style={{ height: "14rem" }} variant="top" src="/assets/images/products (6).png" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button className="main_color_bg border-0 fw-semibold">
                                            <a className='a_tag text-light' href="products/singleproduct">
                                            جزیئات بیشتر
                                            </a></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Footer */}
           <Footer/>
        </>
    )
}

export default Products
