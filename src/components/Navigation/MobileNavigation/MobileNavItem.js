import React from 'react'

const NavItem = ({ navLink }) => {
   return (
      <li className='mobile-nav__link'>
         {navLink}
      </li>
   )
}
export default NavItem