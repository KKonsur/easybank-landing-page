import React from 'react'

const NavItem = ({ index, handleSelectLink, selectedLink, navLink }) => {
   const handleClick = () => {
      handleSelectLink(index)
   }
   const classes = selectedLink === index ? 'navigation__nav-link navigation__nav-link--active' : 'navigation__nav-link'

   return (
      <li onClick={handleClick} className={classes}>
         {navLink}
      </li>
   )
}
export default NavItem