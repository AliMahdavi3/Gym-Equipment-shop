import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
const ProductsSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/products').then((res) => {
            console.log(res.data.products);
            setData(res.data.products)
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);
    return (
        <div className='row d-flex justify-content-center align-items-center mx-2 products pb-4 rounded-4 mb-3'>
            {
                Array.isArray(data) ?
                    data.map((d, index) => (
                        <div key={index} className="products_card mx-2 my-2 col-12 col-md-4">
                            <Card className='card_pro' style={{ width: "15rem" }}>
                                <Card.Img style={{ height: "14rem" }} variant="top"
                                    src={'http://localhost:4000/' + d.imageUrl[0]} />
                                <Card.Body className='text-end'>
                                    <Card.Title>{d.title}</Card.Title>
                                    <Card.Text className='card_description'>
                                        {d.content}
                                    </Card.Text>
                                    <Button className="main_color_bg border-0 fw-semibold">
                                        <a className='a_tag text-light' href={`products/${d._id}`}>
                                            جزیئات بیشتر
                                        </a></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )) : null
            }
        </div>
    )
}

export default ProductsSection
