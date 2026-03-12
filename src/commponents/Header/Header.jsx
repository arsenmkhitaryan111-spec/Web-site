import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Header = () => {
  return (
    <div className='header'>
      <div className='header-opacity1'>
        <Link to='index'><img className='header-img' src="https://naregzareh.com/wp-content/uploads/2025/06/Nare-Zareh-Logo-3-250x27.png" alt="" /></Link>
      </div>
      <div className='header-opacity2'>
        <Link className='link' to='/about'><p className='header-p'>About</p></Link>
      <Link className='link' to='/contact'><p className='header-p'>Contact</p></Link>
      <Link className='link' to='/services'><p className='header-p'>Services</p></Link>
      <Link className='link' to='/team'><p className='header-p'>Team</p></Link>
      <Link className='link' to='/gallery'><p className='header-p'>Gallery</p></Link>
      <Link className='link' to='/blog'><p className='header-p'>Blog</p></Link>
      </div>
      <div className='header-opacity3'>
          <div className='header-icons'>
            <FaFacebook />
            <p>Facebook</p>
          </div>
          <div className='header-icons'>
            <FaInstagram />
            <p>Instagram</p>
          </div>
      </div>
      
      </div>
  )
}

export default Header
