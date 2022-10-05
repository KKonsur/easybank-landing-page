import React, { useState } from 'react'
import NavItem from './NavItem'

const Navigation = () => {
   const navLinks = ['Home', 'About', 'Contact', 'Blog', 'Careers']
   const [selectedLink, setSelectedLink] = useState(0)

   const handleSelectLink = (index) => {
      setSelectedLink(index)
   }

   return (
      <nav className='nav'>
         <ul className='nav__list'>
            {navLinks.map((link, index) =>
               <NavItem
                  class={selectedLink === index ? 'navigation__nav-link navigation__nav-link--active' : 'navigation__nav-link'}
                  key={link}
                  index={index}
                  navLink={link}
                  handleSelectLink={handleSelectLink}
               />)}
         </ul>
      </nav>
   )
}

export default Navigation