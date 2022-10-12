import React from 'react'
import Offers from './Offers/Offers'
import './About.scss'
const About = () => {
   return (
      <section className='about'>
         <div className="about__content">
            <div className="about__text">
               <h2 className='about__heading'>Why choose Easybank?</h2>
               <p className='about__description'>We leverage Open Banking to turn your bank account into your financial hub. <br />
                  Control your finances like never before.</p>
            </div>
            <Offers />
         </div>
      </section>
   )
}

export default About