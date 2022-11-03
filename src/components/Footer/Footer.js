import React from 'react'
import './Footer.scss'
import logo from '../../images/logo-light.svg'
import fbIcon from '../../images/icon-facebook.svg'
import instagramIcon from '../../images/icon-instagram.svg'
import ytIcon from '../../images/icon-youtube.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import pinterestIcon from '../../images/icon-pinterest.svg'
import Button from '../../UI/Button/Button'

const Footer = () => {
   return (
      <footer className='footer'>
         <div className="footer__content">
            <div className="footer__logo-nav-box">
               <div className="footer__logos">
                  <img className="footer__logo" src={logo} alt="logo" />
                  <div className="footer__social-icons">
                     <img className="footer__social-icon" src={fbIcon} alt="facebook icon" />
                     <img className="footer__social-icon" src={ytIcon} alt="youtube icon" />
                     <img className="footer__social-icon" src={twitterIcon} alt="twitter icon" />
                     <img className="footer__social-icon" src={pinterestIcon} alt="pinterest icon" />
                     <img className="footer__social-icon" src={instagramIcon} alt="instagram icon" />
                  </div>
               </div>
               <nav className="footer__nav">
                  <ul className='footer__nav-items'>
                     <li className='footer__nav-item'>About us</li>
                     <li className='footer__nav-item'>Contact</li>
                     <li className='footer__nav-item'>Blog</li>
                  </ul>
                  <ul className='footer__nav-items'>
                     <li className='footer__nav-item'>Careers</li>
                     <li className='footer__nav-item'>Support</li>
                     <li className='footer__nav-item'>Privacy policy</li>
                  </ul>
               </nav>
            </div>
            <div className="footer__btn-copyright-box">
               <Button name='Request Invite' />
               <p className='footer__copyright'>&copy; Easybank. All rights reserved</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer