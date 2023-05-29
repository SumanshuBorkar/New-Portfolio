import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect } from 'react';
import React from 'react'
import logo from '../assets/img/LOGO.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar() {
    const [activeLink, setactiveLink] = useState('Home');
    const [scrolled, setscrolled] = useState(false);
    useEffect(() =>{
        const onscrolled = () =>{
            if(window.screenY > 50){
                setscrolled(true);
            }
            else{
                setscrolled(false);
            }
        }
        window.addEventListener("scroll", onscrolled);

        return ()=> window.removeEventListener("scroll", onscrolled);

    }, []);

    const onUpdateActiveLink = (value) =>{
       setactiveLink(value);
    }
  return (
    <>
    <Navbar  expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className='toplogo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "Home"? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills"? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === "projects"? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === "connect"? "active navbar-link": "navbar-link"} onClick={()=> onUpdateActiveLink('connect')}>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sumanshu-borkar-b83a5b26b/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/SumanshuBorkar"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={navIcon3} alt="" /></a>
            </div>
            <a href="#connect">
            <button className="vvd" onClick={()=> console.log('connected')}>
            <span>Let's connect</span>
            </button>
            </a>
        </span>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar