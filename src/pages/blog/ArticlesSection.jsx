import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ArticlesSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/articles').then((res) => {
            console.log(res.data.articles);
            setData(res.data.articles);
        }).catch((error) => {
            console.log(error.message);
        })
    }, []);
    return (
        <div className="blog_articlse">
            <div className="row">
                {
                    Array.isArray(data) ?
                        data.map((d, index) => (
                            <div className='col-12 col-md-6 my-3'>
                                <div className="card text-bg-dark rounded-5 article_border">
                                    <img src={'http://localhost:4000/' + d.imageUrl}
                                        className="card-img rounded-5" alt="article" />
                                    <div className="card-img-overlay rounded-5 text-end">
                                        <h5 className="fw-semibold card-title">
                                            <a className='a_tag text-warning' href={`blog/${d._id}`}>{d.title_1}</a></h5>
                                        <p className="fw-medium card-text blog_articles_content_1">
                                            <a className='a_tag text-light' href={`blog/${d._id}`}>{d.content_1}</a>
                                        </p>
                                        <p className="fw-medium card-text"><small>{d.createdAt}</small></p>
                                    </div>
                                </div>
                            </div>
                        )) : null
                }
            </div>
        </div>
    )
}

export default ArticlesSection
