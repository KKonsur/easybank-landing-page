import React from 'react'
import onlineBankingImg from '../../../images/icon-online.svg'
import budgetingImg from '../../../images/icon-budgeting.svg'
import onboardingImg from '../../../images/icon-onboarding.svg'
import apiImg from '../../../images/icon-api.svg'
import Offer from './Offer'
import './Offers.scss'

const Offers = () => {
   const offers = [
      {
         img: onlineBankingImg,
         name: 'Online Banking',
         description: 'Our modern wen and mobile applications allow you to keep track of your finances wherever you are in the world.'
      },
      {
         img: budgetingImg,
         name: 'Simple Budgeting',
         description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.'
      },
      {
         img: onboardingImg,
         name: 'Fast Onboarding',
         description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.'
      },
      {
         img: apiImg,
         name: 'Open API',
         description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
      }
   ]
   return (
      <div className='offers'>
         {offers.map(offer => (
            <Offer key={offer.name} img={offer.img} name={offer.name} description={offer.description} />
         ))}
      </div>
   )
}

export default Offers