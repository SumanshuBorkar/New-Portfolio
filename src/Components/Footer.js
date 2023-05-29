import React from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import Logo from '../assets/img/LOGO.png';
function Footer() {
  return (
    <footer className='footer'>
      <div></div>
      <div className='head-of'>I'm placed at this location, feel free to visit my office!!😄</div>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4878.676913059366!2d79.0571243231141!3d21.070159188105045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA0JzAzLjMiTiA3OcKwMDMnNDIuOCJF!5e0!3m2!1sen!2sin!4v1685302407017!5m2!1sen!2sin"} 
             allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" 
              className='map-of-westeros'></iframe>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/sumanshu-borkar-b83a5b26b/"><img src={navIcon1} alt="imageoficon" /></a>
            <a href="https://github.com/SumanshuBorkar"><img src={navIcon2} alt="imageoficon" /></a>
            <a href="https://www.instagram.com/"><img src={navIcon3} alt="imageoficon" /></a>
            <img src={Logo} alt="image-of-Logo" className='image-of-Logo' />
          </div>
    </footer>
  )
}


export default Footer