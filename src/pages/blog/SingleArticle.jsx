import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleArticle = () => {
    let { articleId } = useParams();
    const [data, setData] = useState(null);
    console.log(articleId);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/article/${articleId}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((error) => {
            console.log(error.message);
        });
    }, [articleId]);

    return (
        <>
            {/* Breadcrumb */}
            <div className='breadcrumb'>
                <div className="container">
                    <div>
                        <nav dir='rtl' className='breadcrumb pt-3' aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="fw-semibold breadcrumb-item ms-2"><a className='a_tag ms-2' href="/products/singleproduct">وبلاگ</a>/</li>
                                <li className="fw-semibold breadcrumb-item"><a className='a_tag' href="/products/singleproduct">مقالات</a></li>
                                <li className="fw-semibold breadcrumb-item active" aria-current="page">مقاله بدنسازی</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {
                !data ? (
                    <div>...................</div>
                ) : (
                    <div className="single_article">
                        <div className="container">
                            <div className='single_article_img '>
                                <img src={`http://localhost:4000/` + data.article.imageUrl}
                                    className='rounded-5' alt="" />
                            </div>
                            <div dir='rtl'>
                                <div className="my-3 single_article_title">
                                    <h3 className='fw-bold'>{data.article.title_1}</h3>
                                </div>
                                <div className='my-3'>
                                    <p>نوشته شده توسط : {data.article.author}</p>
                                </div>
                                <div className='single_article_text'>
                                    <p className='fs-5 fw-semibold'>
                                        {data.article.content_1}
                                    </p>
                                </div>
                                <div className="single_article_title">
                                    <h3 className='my-5 fw-bold'>{data.article.title_2}</h3>
                                </div>
                                <div className='single_article_text'>
                                    <p className='fs-5 fw-semibold'>
                                        {data.article.content_2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Tabs */}
            <div className="article_tab py-5 container">
                <ul className="nav nav-pills">
                    <li className="nav-item me-2 btn btn-secondary rounded-5">
                        <a className="nav-link a_tag text-light fw-semibold" href="/">Active</a>
                    </li>
                    <li className="nav-item me-2 btn btn-secondary rounded-5">
                        <a className="nav-link a_tag text-light fw-semibold" href="/">Link</a>
                    </li>
                    <li className="nav-item me-2 btn btn-secondary rounded-5">
                        <a className="nav-link a_tag text-light fw-semibold" href="/">Link</a>
                    </li>
                </ul>
            </div>

            {/* Form */}
            <div className="comments_form">
                <div className="container">
                    <h3 className='my-5 text-center'>ارسال دیدگاه خود برای این مقاله</h3>
                    <div className='comments_form_inputs'>
                        <input className='w-50 my-3 border border-0 rounded-4 bg-secondary text-light px-3 py-2' type="text" name="" placeholder='ایمیل' id="" />
                        <input className='w-50 my-3 border border-0 rounded-4 bg-secondary text-light px-3 py-2' type="text" name="" placeholder='نام کاربری' id="" />
                        <textarea className='w-75 my-3 border border-0 rounded-4 bg-secondary text-light px-3 py-2' type="text" name="" placeholder='نظر' id="" />
                        <button className='btn btn-warning rounded-5 my-4 px-5'>ارسال نظر</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default SingleArticle
