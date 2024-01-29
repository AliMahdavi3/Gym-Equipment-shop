import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

const SingleArticle = () => {
    let { articleId } = useParams();
    const [data, setData] = useState(null);
    const [comment, setComment] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    console.log(articleId);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/article/${articleId}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((error) => {
            console.log(error.message);
        });
    }, [articleId]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/comments').then((res) => {
            console.log(res.data.comments);
            setComment(res.data.comments)
        }).catch((error) => {
            console.log(error.message);
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('name', name);
        formData.append('content', content);

        try {

            const res = await axios.post('http://localhost:4000/api/comment', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            swal({
                title: "عملیات موفقیت آمیز بود",
                text: "!دیدگاه ارسال شد",
                icon: "success",
                button: "متوجه شدم",
            }).then(() => {
                window.location.reload()
            });
            console.log(res.data);
        } catch (error) {
            swal({
                title: "خطایی رخ داده!",
                text: error.message,
                icon: "warning",
                button: "متوجه شدم",
            });
            console.log(error.message);
        }
    }

    return (
        <>
            {
                !data ? (
                    <h1 className='text-center mt-5 fw-bold'>درحال بارگذاری....!</h1>
                ) : (
                    <div className="single_article pt-5">
                        <div className="container pt-5">
                            <div className='single_article_img pt-5'>
                                <img src={`http://localhost:4000/` + data.article.imageUrl[0]}
                                    className='rounded-5' alt="" />
                            </div>
                            <div dir='rtl'>
                                <div className="my-3 single_article_title">
                                    <h3 className='fw-bold'>{data.article.title}</h3>
                                </div>
                                <div className='my-3'>
                                    <p>نوشته شده توسط : {data.article.author}</p>
                                </div>
                                <div className='single_article_text'>
                                    <p dangerouslySetInnerHTML={{ __html: data.article.value }}
                                        className='fs-5 fw-semibold'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Form */}
            <div className="comments_form pb-5">
                <div className="container">
                    <h3 className='my-5 text-center'>ارسال دیدگاه خود برای این مقاله</h3>
                    <form className='comments_form_inputs' onSubmit={handleSubmit}>
                        <input className='w-50 my-3 border border-0 rounded-4 bg-secondary text-light px-3 py-2'
                            type="text" name="email" placeholder='ایمیل' id=""
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className='w-50 my-3 border border-0 rounded-4 bg-secondary text-light px-3 py-2'
                            type="text" name="name" placeholder='نام کاربری' id=""
                            value={name} onChange={(e) => setName(e.target.value)} />
                        <textarea className='text-end w-75 my-3 border border-0 rounded-4 bg-secondary text-light px-3 py-2'
                            name="content" placeholder='نظر' id=""
                            value={content} onChange={(e) => setContent(e.target.value)} />
                        <button className='btn btn-warning rounded-5 my-4 px-5' type="submit">ارسال نظر</button>
                    </form>
                </div>
            </div>

            <div className="container">
                <div>
                    {
                        Array.isArray(comment) ?
                            comment.map((d, index) => (
                                <ul key={index} className="list-unstyled">
                                    <li className='comments_list py-3'>
                                        <p className='text-end'>{d.name}</p>
                                        <p className='text-end'>{d.content}</p>
                                    </li>
                                </ul>
                            )) : null
                    }
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </>
    )
}

export default SingleArticle
