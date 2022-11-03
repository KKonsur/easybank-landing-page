import React from 'react'
import './Intro.scss'

const Intro = ({ children }) => {
   return (
      <header className='intro'>{children}</header>
   )
}

export default Intro