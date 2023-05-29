import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/Astro.png';

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Full Stack Developer" ];
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
       tick();
    }, delta)
    return () => {clearInterval(ticker)};
  }, [text]);

  const tick = () =>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1);

    setText(updateText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updateText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }
    else if(isDeleting && updateText === ""){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfoleo</span>
            <h1>{`Hi I'm Sumanshu`} <div className='wrap'>{text}</div> </h1>
            <p>As a budding web developer, I am driven by a passion for creating captivating online experiences. With a thirst for knowledge and a commitment to continuous growth, I approach each project with enthusiasm and a desire to learn. </p>
            <button onClick={()=>console.log('connected')}>Lets connect <ArrowRightCircle size={25}/></button>
          </Col>
          <Col>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner





