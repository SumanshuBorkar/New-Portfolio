import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import img1 from './../assets/img/Resume.png';
import img2 from './../assets/img/PROJECT-img.png';
import img3 from './../assets/img/Flub.png';
import img4 from "./../assets/img/Vegi.png";
import img5 from "./../assets/img/PDFProcessor.jpg";
import Footer from './Footer';

function Project() {
  // Projects data
  const projects = [
    { title: 'Resume', description: 'Full stack engineer', imgUrl: img1, redirect: 'https://drive.google.com/file/d/1r2X3jM9XmeVwR3y2QW0MDfYxIL9cw7qE/view?usp=drive_link' },
    { title: 'Car Rental App', description: 'M.E.R.N Project', imgUrl: img2, redirect: 'https://car-rental-project.vercel.app/' },
    { title: 'Flub', description: 'Social Media App', imgUrl: img3, redirect: 'https://flub-fontend.vercel.app/' },
    { title: 'Vegi Store', description: 'E-Commerce', imgUrl: img4, redirect: 'https://vegi-store.onrender.com/' },
    { title: 'AI-Recipt-Processor', description: 'A full-stack application for processing and analyzing PDF documents', imgUrl: img5, redirect: 'ai-recipt-processor.vercel.app' },
     ];

  // Split projects into groups of 6
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += 6) {
    projectChunks.push(projects.slice(i, i + 6));
  }

  return (
    <>
      <section className="project" id='project'>
        <Container>
          <Row>
            <Col>
              <h1>Projects & Docs</h1>
              <p>These are some projects I have worked on!</p>
              <Tab.Container defaultActiveKey='page-1'>
                <Nav variant="pills" className="mb-3">
                  {projectChunks.map((_, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={`page-${index + 1}`}>Page {index + 1}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  {projectChunks.map((chunk, index) => (
                    <Tab.Pane eventKey={`page-${index + 1}`} key={index}>
                      <Row>
                        {chunk.map((project, idx) => (
                          <ProjectCard
                            key={idx}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  );
}

export default Project;
