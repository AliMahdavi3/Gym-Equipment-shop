import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import swal from 'sweetalert';



const ProductsSection = ({ selectedCategory, searchTerm }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);


    useEffect(() => {
        axios.get('https://api.iliyafitness.com/api/products').then((res) => {
            setData(res.data.products)
        }).catch((error) => {
            swal({
                title: "خطایی رخ داده!",
                text: error.message,
                icon: "warning",
                button: "متوجه شدم",
            });        })
    }, []);

    const filteredData = selectedCategory === 'All' ? data : data.filter((d) => d.category === selectedCategory);
    const searchedData = filteredData.filter((d) => d.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = searchedData.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(searchedData.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='row d-flex justify-content-center align-items-center mx-2 products pb-4 rounded-4 mb-3'>
            {currentProducts.map((d, index) => (
                <div key={index} className="products_card mx-2 my-2 col-12 col-md-4">
                    <Card className='card_pro' style={{ width: "15rem" }}>
                        <Card.Img style={{ height: "14rem" }} variant="top"
                            src={'https://api.iliyafitness.com/' + d.imageUrl[0]} />
                        <Card.Body className='text-end'>
                            <Card.Title className='text-secondary fw-bold product_title_card'>{d.title}</Card.Title>
                            <Card.Text className='card_description'>
                                {d.content}
                            </Card.Text>
                            <Button className="main_color_bg border-0 fw-semibold">
                                <a className='a_tag text-light' href={`products/${d._id}`}>
                                    جزیئات بیشتر
                                </a>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            <div className=' mt-5 d-flex justify-content-center align-items-center'>
                <nav dir='rtl' aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link rounded-2" onClick={() => paginate(currentPage - 1)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {pageNumbers.map((number) => (
                            <li key={number} className={`page-item  ${currentPage === number ? 'active' : ''}`}>
                                <button className="page-link rounded-2" onClick={() => paginate(number)}>{number}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                            <button className="page-link rounded-2" onClick={() => paginate(currentPage + 1)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ProductsSection
