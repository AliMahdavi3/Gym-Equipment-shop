import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment-jalaali';
import swal from 'sweetalert';

const NewArticle = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https://api.iliyafitness.com/api/articles`).then((res) => {
      const lastIndex = res.data.articles.length - 1;
      setData(res.data.articles[lastIndex]);
    }).catch((error) => {
      swal({
        title: "خطایی رخ داده!",
        text: error.message,
        icon: "warning",
        button: "متوجه شدم",
    });    })
  }, []);

  
  return (
    <div className="new_article">
      < div className="row">
        {!data ? (
          <h1 className='text-center mt-5 fw-bold'>درحال بارگذاری....!</h1>
        ) : (
          <div className="col-12">
            <div className="card mb-3 rounded-5 new_article_card">
              <div className="row" style={{ "height": "100%" }}>
                <div className="col-md-5" style={{ "height": "100%" }}>
                  <img src={`https://api.iliyafitness.com/` + data.imageUrl[0]}
                    style={{ "height": "500px" }}
                    className="new_article_card img-fluid rounded-4" alt="..." />
                </div>
                <div className="col-md-7 text-end" style={{ "height": "100%" }}>
                  <div className="card-body">
                    <h3 className="card-title fw-semibold">جدید ترین مقاله</h3>
                    <h5 className="my-4 card-title">{data.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: data.value }} className="card-text fw-semibold">
                    </p>
                    <p className="card-text"><small className="text-body-secondary">{moment(data.createdAt).format('jYYYY/jMM/jDD HH:mm:ss')} : آخرین بروزرسانی</small></p>
                    <button className='btn btn-secondary fw-bold px-2'><a className='a_tag text-light' href={`blog/${data._id}`}>مطالعه</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default NewArticle
