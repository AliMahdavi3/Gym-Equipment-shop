import axios from 'axios';
import moment from 'moment-jalaali';
import React, { useEffect, useState } from 'react'

const ArticlesSection = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(6);

    useEffect(() => {
        axios.get('http://localhost:4000/api/articles').then((res) => {
            console.log(res.data.articles);
            setData(res.data.articles);
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);


    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <>
            <div className="blog_articlse">
                <div className="row">
                    {
                        Array.isArray(currentArticles) ?
                            currentArticles.map((d, index) => (
                                <div key={index} className='col-12 col-md-6 my-3'>
                                    <div className="card text-bg-dark rounded-5 article_border">
                                        <img src={'http://localhost:4000/' + d.imageUrl[0]}
                                            className="card-img rounded-5" alt="article" />
                                        <div className="card-img-overlay rounded-5 text-end">
                                            <h5 className="fw-semibold card-title">
                                                <a className='a_tag text-warning' href={`blog/${d._id}`}>{d.title}</a></h5>
                                            <p className="fw-medium card-text blog_articles_content_1">
                                                <a dangerouslySetInnerHTML={{ __html: d.value }}
                                                    className='a_tag text-light' href={`blog/${d._id}`}></a>
                                            </p>
                                            <p className="fw-medium card-text"><small>{moment(d.createdAt).format('jYYYY/jMM/jDD HH:mm:ss')}</small></p>
                                        </div>
                                    </div>
                                </div>
                            )) : null
                    }
                </div>
            </div>


            <div className='d-flex my-3 justify-content-center align-items-center'>
                <nav dir='rtl' aria-label="Page navigation example">
                    <ul  className="pagination">
                        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                            <button className="page-link rounded-2" aria-label="Previous" onClick={() => paginate(currentPage - 1)}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {data && Array.isArray(data) ? Array(Math.ceil(data.length / articlesPerPage)).fill().map((_, i) => (
                            <li key={i} className={`page-item ${i + 1 === currentPage && 'active'}`}>
                                <button className="page-link rounded-2" onClick={() => paginate(i + 1)}>{i + 1}</button>
                            </li>
                        )) : null}
                        <li className={`page-item ${currentPage === Math.ceil(data.length / articlesPerPage) && 'disabled'}`}>
                            <button className="page-link rounded-2" aria-label="Next" onClick={() => paginate(currentPage + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default ArticlesSection
