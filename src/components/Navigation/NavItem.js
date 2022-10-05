import React from 'react'

const NavItem = (props) => {
   const handleClick = () => {
      props.handleSelectLink(props.index)
   }
   
   return (
      <li onClick={handleClick} className={props.class}>{props.navLink}</li>
   )
}
export default NavItem