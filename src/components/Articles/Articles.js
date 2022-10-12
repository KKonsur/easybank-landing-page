import React from 'react'
import './Articles.scss'
import currencyImg from '../../images/image-currency.jpg'
import restaurantImg from '../../images/image-restaurant.jpg'
import planeImg from '../../images/image-plane.jpg'
import confettiImg from '../../images/image-confetti.jpg'
import Article from './Article'

const Articles = () => {
   const articles = [
      {
         img: { src: currencyImg, alt: 'currency image' },
         author: 'Claire Robinson',
         title: 'Receive money in any currency with no fees',
         description: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single...',
      },
      {
         img: { src: restaurantImg, alt: 'restaurant image' },
         author: 'Wilson Hutton',
         title: 'Treat yourself without worrying about money',
         description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...',
      },
      {
         img: { src: planeImg, alt: 'plane image' },
         author: 'Wilson Hutton',
         title: 'Take your Easybank card wherever you go',
         description: 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you...',
      },
      {
         img: { src: confettiImg, alt: 'confetti image' },
         author: 'Claire Robinson',
         title: 'Our invite-only Beta accounts are now live!',
         description: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site...',
      }
   ]

   return (
      <section className='articles'>
         <h2 className='articles__heading'>Latest Articles</h2>
         <div className="articles__container">
            {articles.map(article => (
               <Article
                  key={article.title}
                  img={article.img}
                  author={article.author}
                  title={article.title}
                  description={article.description}
               />
            ))}
         </div>
      </section>
   )
}

export default Articles