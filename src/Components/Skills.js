import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from './../assets/img/reactjs-icon.svg';
import image2 from './../assets/img/nodejs-icon.svg';
import image3 from './../assets/img/mongodb-icon.svg';
import image4 from './../assets/img/expressjs-icon.svg';
import image5 from './../assets/img/css-icon.svg';
import image6 from './../assets/img/HTML.svg';
import image7 from './../assets/img/getbootstrap-icon.svg';
import image8 from './../assets/img/angular-icon.svg';
import image9 from './../assets/img/typescript.svg';
import figma from './../assets/img/figma-icon.svg';
import pyhton from '../assets/img/python-5.svg';
import next from './../assets/img/next-js.svg';
import Footer from "./Footer";

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3, // Slides 3 items at a time
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2, // Slides 2 items at a time
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1, // Slides 1 item at a time
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // Slides 1 item at a time
        },
    };

    return (
        <>
            <Container className='skill' id='skills'>
                <Row className='skill-box'>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                I am a passionate web developer eager to learn new tech. I am well versed in M.E.R.N. stack.
                            </p>
                            <br />
                            <Carousel
                                className='skill-slider'
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000} // 2 seconds
                                keyBoardControl={false} // Disable keyboard control for continuous slide
                                customTransition="transform 1s ease-in-out" // Smooth transition
                                transitionDuration={1000} // 1 second transition
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on tablet and mobile
                                showDots={false} // Remove navigation dots
                                draggable={false} // Disable dragging
                                swipeable={false} // Disable swiping
                            >
                                <div className="item">
                                    <img src={image1} alt="React Logo" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={image2} alt="Node.js Logo" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={image3} alt="MongoDB Logo" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={image4} alt="Express.js Logo" />
                                    <h5>Express.js</h5>
                                </div>
                                <div className="item">
                                    <img src={image5} alt="CSS Icon" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={image6} alt="HTML Icon" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={image7} alt="Bootstrap Logo" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={image8} alt="Angular Logo" />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={image9} alt="TypeScript Logo" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={figma} alt="Figma Logo" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={pyhton} alt="Python Logo" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={next} alt="Next.js Logo" />
                                    <h5>Next.js</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Skills;
