import React from 'react'
import { useState } from 'react'
import hamburger from '../../images/icon-hamburger.svg'
import close from '../../images/icon-close.svg'
import './Hamburger.scss'

const Hamburger = (props) => {
   const [isClicked, setIsClicked] = useState(false)

   const handleClick = () => {
      setIsClicked(!isClicked)
      props.onHandleClick(!isClicked)
   }
   return (
      <img className='hamburger' src={isClicked ? close : hamburger} alt="" onClick={handleClick} />
   )
}

export default Hamburger