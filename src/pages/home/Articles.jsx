import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Articles = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/articles').then((res) => {
            console.log(res.data.articles);
            const sortArticles = res.data.articles.sort((a, b) => (new Date(b.date) - new Date(a.date)));
            const lastThreeArticles = sortArticles.slice(0, 4);
            setData(lastThreeArticles);
        }).catch((error) => {
            console.log(error.message);
        });
    }, []);

    return (
        <div className="article pt-3 pb-5">
            <div className="container">
                <div className='d-flex title_font pt-3 justify-content-between align-items-center'>
                    <a className='a_tag fs-5 fw-bold' href="/">بیشتر</a>
                    <h2 className='fw-bold'>مقالات وبسایت</h2>
                </div>
                <div className="row">
                    {
                        Array.isArray(data) ?
                            data.map((d, index) => (
                                <div key={index} className='col-12 col-md-6 my-3'>
                                    <div className="card text-bg-dark rounded-5 article_border">
                                        <img src={'http://localhost:4000/' + d.imageUrl[0]} className="card-img rounded-5" alt="article" />
                                        <div dir='rtl' className="card-img-overlay rounded-5">
                                            <h5 className="fw-semibold card-title"><a className='a_tag text-light' href={`blog/${d._id}`}>{d.title_1}</a></h5>
                                            <p className="fw-medium main_article_content card-text"><a className='a_tag text-light' href={`blog/${d._id}`}>{d.content_1}</a></p>
                                            <p className="fw-medium card-text"><small>{d.createdAt}</small></p>
                                        </div>
                                    </div>
                                </div>
                            )) : null
                    }

                </div>
            </div>
        </div>
    )
}

export default Articles
