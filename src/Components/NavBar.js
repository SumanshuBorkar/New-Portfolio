import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';
import logo from '../assets/img/LOGO.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            <Navbar className={scrolled ? "scrolled" : ""}>
                <Container className='nav-container'>
                    <Navbar.Brand className='logoContainer' as={Link} to="/">
                        <img src={logo} alt="logo" className='toplogo' />
                    </Navbar.Brand>
                    {/* Removed Navbar.Toggle */}
                    {/* Removed Navbar.Collapse */}
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/skills"
                            className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contacts"
                            className={activeLink === "connect" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink('connect')}>
                            Contacts
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text d-none d-lg-flex">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sumanshu-borkar-b83a5b26b/"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/SumanshuBorkar"><img src={navIcon2} alt="GitHub" /></a>
                            <a href="https://www.instagram.com/"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <Link to="/contacts">
                            <button className="vvd">
                                <span>Let's connect</span>
                            </button>
                        </Link>
                    </span>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
