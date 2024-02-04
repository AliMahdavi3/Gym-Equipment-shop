import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Category = ({ onCategorySelect }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.iliyafitness.com/api/products').then((res) => {
            const categories = res.data.products.reduce((acc, product) => {
                if (!acc.includes(product.category)) {
                    acc.push(product.category);
                }
                return acc;
            }, []);
            setData(categories);
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);

    const handleCategorySelect = (category) => {
        onCategorySelect(category);
    }

    return (
        <div className='d-flex justify-content-center main_products_div'>
            <div className='more_view_products text-center py-4 mb-5 rounded-4'>
                <h6 className='fw-bold'>دسته بندی محصولات</h6>
                <hr />
                {
                    Array.isArray(data) ?
                        data.map((category, index) => (
                            <ul key={index} className="list-unstyled">
                                <li className='mb-3 pointer text-dark' onClick={() => handleCategorySelect(category)}>
                                    {category}
                                </li>
                            </ul>
                        )) : null
                }
            </div>
        </div>
    )
}

export default Category
