import React, { useState } from 'react'
import NavItem from './NavItem'

const Navigation = () => {
   const navLinks = ['Home', 'About', 'Contact', 'Blog', 'Careers']
   const [selectedLink, setSelectedLink] = useState('')

   const handleSelectLink = (index) => {
      setSelectedLink(index)
   }

   return (
      <nav className='nav'>
         <ul className='nav__list'>
            {navLinks.map((link, index) =>
               <NavItem
                  selectedLink={selectedLink}
                  key={link}
                  index={index}
                  navLink={link}
                  handleSelectLink={handleSelectLink}
               />
            )}
         </ul>
      </nav>
   )
}

export default Navigation