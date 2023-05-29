import React from 'react'
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

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <Container className='skill' id='skills'>
        <Row className='skill-box'>
            <Col>
               <div className="skill-bx">
                <h1>
                    Skills
                </h1>
                <p>I am a passionate web developer eager to learn new tech. I am well versed in M.E.R.N. stack.</p><br/>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                  <div className="item">
                    <img src={image1} alt="Image" />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <img src={image2} alt="Image" />
                    <h5>Node.js</h5>
                  </div>
                  <div className="item">
                    <img src={image3} alt="Image" />
                    <h5>Mongo-DB</h5>
                  </div>
                  <div className="item">
                    <img src={image4} alt="Image" />
                    <h5>Express.js</h5>
                  </div>
                  <div className="item">
                    <img src={image5} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={image6} alt="Image" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={image7} alt="Image" />
                    <h5>Bootstrap</h5>
                  </div>
                </Carousel>
               </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Skills