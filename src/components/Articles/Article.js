import React from 'react'
import './Article.scss'

const Article = ({ img, author, title, description }) => {
   return (
      <article className='article'>
         <img className='article__img' src={img.src} alt={img.alt} />
         <div className="article__info">
            <h4 className='article__author'>By {author}</h4>
            <h3 className='article__title'>{title}</h3>
            <p className='article__description'>{description}</p>
         </div>
      </article>
   )
}

export default Article