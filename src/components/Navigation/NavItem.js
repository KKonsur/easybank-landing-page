import React from 'react'

const NavItem = ({ index, handleSelectLink, selectedLink, navLink }) => {
   const handleClick = () => {
      handleSelectLink(index)
   }
   const classes = selectedLink === index ? 'nav__link nav__link--active' : 'nav__link'

   return (
      <li onClick={handleClick} className={classes}>
         {navLink}
      </li>
   )
}
export default NavItem