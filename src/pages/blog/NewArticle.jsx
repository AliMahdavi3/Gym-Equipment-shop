import React, { useEffect, useState } from 'react'
import axios from 'axios';

const NewArticle = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      axios.get(`http://localhost:4000/api/articles`).then((res) => {
        console.log(res.data.articles);
        const lastIndex = res.data.articles.length - 1;
        setData(res.data.articles[lastIndex]);
      }).catch((error) => {
        console.log(error.message);
      })
    }, []);
  return (
    <div className="new_article">
    < div className="row">
      {!data ? (
        <div>..................</div>
      ) : (
        <div className="col-12">
          <div className="card mb-3 rounded-5 new_article_card">
            <div className="row" style={{ "height": "100%" }}>
              <div className="col-md-5" style={{ "height": "100%" }}>
                <img src={`http://localhost:4000/` + data.imageUrl[0]} 
                style={{ "height": "500px" }}
                  className="new_article_card img-fluid rounded-4" alt="..." />
              </div>
              <div className="col-md-7 text-end" style={{ "height": "100%" }}>
                <div className="card-body">
                  <h3 className="card-title fw-semibold">جدید ترین مقاله</h3>
                  <h5 className="my-4 card-title">{data.title}</h5>
                  <p className="card-text fw-semibold">
                    {data.content}
                  </p>
                  <p className="card-text"><small className="text-body-secondary">{data.createdAt} : آخرین بروزرسانی</small></p>
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
