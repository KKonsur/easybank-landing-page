import React from 'react'

const Offer = ({ img, name, description }) => {
   return (
      <div className='offers__offer'>
         <img className='offers__img' src={img} alt={name} />
         <h3 className='offers__name'>{name}</h3>
         <p className='offers__description'>{description}</p>
      </div>
   )
}

export default Offer