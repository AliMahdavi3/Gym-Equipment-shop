import React from 'react'
import Footer from '../../components/Footer'
import ArticlesSection from './ArticlesSection';
import NewArticle from './NewArticle';

const Blog = () => {


  return (
    <section>
      {/* Blog */}
      <div className="blog">
        <div className="container">
          <div className="blog_title py-2">
            <h1 className='pb-3'>مقالات وبسایت</h1>
          </div>


          <NewArticle />

          <div className="blog_category py-3">
            <ul className="nav d-flex justify-content-between">
              <li className="nav-item mt-2 rounded-4 btn btn-secondary">
                <a className="nav-link a_tag fw-semibold text-light" aria-current="page" href="/">دمبل</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href="/">دستگاه بدنسازی</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href="/">وزنه</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href='/'>تغذیه</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href='/'>برنامه</a>
              </li>
              <li className="nav-item mt-2 rounded-4 btn btn-secondary ">
                <a className="nav-link a_tag fw-semibold text-light" href='/'>سلامت</a>
              </li>
            </ul>
          </div>

          <ArticlesSection />

          <div className='d-flex my-3 justify-content-center align-items-center'>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="/">1</a></li>
                <li className="page-item"><a className="page-link" href="/">2</a></li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>


        </div>
        {/* Footer */}
        <Footer />
      </div>


    </section >
  )
}

export default Blog
