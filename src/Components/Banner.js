// src/Components/Banner.js
import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/Astro.png';
import Blackhole from "../assets/img/4k_NEON.mp4"; // Import the video file
// Optionally import other video formats
// import BlackholeWebm from "../assets/img/4k_NEON.webm";
// import BlackholeOgg from "../assets/img/4k_NEON.ogg";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Full Stack Developer"];
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Memoize the tick function to prevent unnecessary re-creations
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className='banner' id='home'>
      {/* Video background */}
      <video className='video-bg' autoPlay loop muted>
        <source src={Blackhole} type="video/mp4" />
        {/* Optionally add other video formats */}
        {/* <source src={BlackholeWebm} type="video/webm" />
        <source src={BlackholeOgg} type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="content">
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>
                Hi, I'm Sumanshu <br />
                <span className='wrap'>{text}</span>
              </h1>
              <p>
                Welcome to my portfolio! Explore my diverse range of projects and see how I bring ideas to life through innovative web development. Feel free to browse my work and get in touch with me for any collaborations or inquiries.
              </p>
              <button onClick={() => console.log('connected')}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Astronaut illustration" className="header-img" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
