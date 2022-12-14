import MobileNavItem from './MobileNavItem'
import './MobileNavigation.scss'

const Navigation = () => {
   const navLinks = ['Home', 'About', 'Contact', 'Blog', 'Careers']

   return (
         <nav className='mobile-nav'>
            <ul className='mobile-nav__list'>
               {navLinks.map((link) =>
                  <MobileNavItem key={link} navLink={link} />
               )}
            </ul>
         </nav>
   )
}

export default Navigation