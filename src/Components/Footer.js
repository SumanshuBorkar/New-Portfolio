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
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0494845386756!2d78.36554827616972!3d17.457345483441824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cf4719cb35%3A0x3f4c251e08394674!2sSuraksha%20Signature%20Apartments%2C%20Surakshaa%20Signature%2C%20Laxmi%20Cyber%20City%2C%20Whitefields%2C%20Kothaguda%2C%20Kondapur%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1730217388147!5m2!1sen!2sin"} 
             allowfullscreen=""
             title="Google Maps Location"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"   
              className='map-of-westeros'></iframe>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/sumanshu-borkar-b83a5b26b/"><img src={navIcon1} alt="imageoficon" /></a>
            <a href="https://github.com/SumanshuBorkar"><img src={navIcon2} alt="imageoficon" /></a>
            <a href="https://www.instagram.com/"><img src={navIcon3} alt="imageoficon" /></a>
            <img src={Logo} alt="logo" className='image-of-Logo' />
          </div>
    </footer>
  )
};


export default Footer

