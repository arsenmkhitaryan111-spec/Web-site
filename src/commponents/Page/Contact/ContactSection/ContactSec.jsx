import React from 'react'
import './ContactSec.css'
const ContactSec = () => {
  return (
    <div className='as'>
        <div className='as-box1'><p className='as-p1'>📞 Contact Us</p></div>
        <div className='as-box2'>
            <span className='as-span'>We’d love to hear from you!</span>
            <p className='as-p2'>Whether you want to ask a question, book a service, or just say hello — our team is here to help.</p>
            </div>
        <div className="as-line"></div>
        <div className="as-box3">
            <p className="as-p3"> 📍 Visit Us</p>
            <span className='as-span'>Nareg Zareh Beauty Salon</span>
            <p className="as-p2">17 Alek Manukyan, Yerevan, 0079, Armenia</p>
            <br />
            <p className="as-p2">🕑 Working Hours: <br />
Daily: 09:00 – 20:30</p>
        </div>
         <div className="as-line"></div>
        <div className="as-box4">
            <p className="as-p3">📱 Call or Message</p>
            <p className="as-p2">Phone: +374 41 160003 <br />
WhatsApp: Click to send a message <br />
Email: info@naregzareh.com <br /></p>
        </div>


        <div className="cs-mapbox">
            <iframe src="https://maps.app.goo.gl/wNnKeiSGThwoHWdL6"
            className='cs-map' frameborder="0">

            </iframe>
        </div>
    </div>
  )
}

export default ContactSec
