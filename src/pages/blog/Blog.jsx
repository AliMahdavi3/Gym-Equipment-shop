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

          <ArticlesSection />

        </div>
        {/* Footer */}
        <Footer />
      </div>
    </section >
  )
}

export default Blog
