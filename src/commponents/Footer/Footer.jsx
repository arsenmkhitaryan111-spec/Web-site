import React from 'react'
import { Link } from 'react-router-dom'
import  './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-opacity1">
        <Link className='link' to='index'>          <img className='footer-img' src="https://naregzareh.com/wp-content/uploads/2025/06/Nare-Zareh-Logo-3-250x27.png" alt="" />
</Link>
      </div>
      <div className="footer-opacity2">
        <div className='foo-box1'>
          <div className='foo-box1-1'>
            
            <Link className='link' to='/about'><p className='header-p'>about</p></Link>
            <Link className='link' to='/contact'><p className='header-p'>contact</p></Link>
            <Link className='link' to='/services'><p className='header-p'>services</p></Link>
            <Link className='link' to='/team'><p className='header-p'>team</p></Link>
            </div>
          <div className='foo-box1-2'>
            <Link className='link' to='/gallery'><p className='header-p'>gallery</p></Link>
            <Link className='link' to='/blog'><p className='header-p'>blog</p></Link>
          
          </div>
        </div>
        <div className='foo-box2'>
              <p className='footer__p'>📌 17 Alek Manukyan, Yerevan, 0079, Armenia</p>
              <p className='footer__p'>📞 +374 41 160003</p>
              <p className='footer__p'>💬 Click Here for WhatsApp</p>
              <p className='footer__p'>📧 info@naregzareh.com</p> 
        </div>
        <div className='foo-box3'><p>© 2026 Nareg Zareh.</p></div>

      </div>
      <div className="footer-opacity3">
        <div className='footer-icons'>
          <FaFacebook /><p>Facebook</p>
        </div>
        <div className='footer-icons'>
          <FaInstagram /><p>Instagram</p>
        </div>       
      </div>
      
    </div>
  )
}

export default Footer
