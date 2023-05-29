import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard';
// import colorSharp2 from './../assets/img/color-sharp2.png';
import img1 from './../assets/img/project-img1.png'
import img2 from './../assets/img/PROJECT-img.png'


function Project() {
    const projects = [
        {
            title: 'Car Rental App',
            description: 'M.E.R.N Project',
            imgUrl : img2,
            redirect: 'https://car-rental-project.vercel.app/'
        },
        {
            title: 'Resume',
            description: 'Full stack engineer',
            imgUrl : img1,
            redirect: 'https://www.youtube.com/watch?v=bLHxrvDvL_8&list=PLC3y8-rFHvwiRYB4-HHKHblh3_bQNJTMa&index=37'
        },

    ]
  return (
    <>
    <section className="project" id='project'>
      <Container>
        <Row>
            <Col>
            <h1>Projects</h1>
            <p>These are some projects I have worked on!</p>
            <Tab.Container defaultActiveKey='first' id='projects-tab'>
            <Nav variant="pills" defaultActiveKey="/home">
             <Nav.Item>
               <Nav.Link eventKey="first">Page 1</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="second">Page 2</Nav.Link>
             </Nav.Item>
             <Nav.Item>
               <Nav.Link eventKey="third">Page 3</Nav.Link>
             </Nav.Item>
            </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                        projects.map((project, index)=>{
                            return (
                                <ProjectCard 
                                 key={index}
                                 {...project}
                                 />
                            )
                        })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>I haven't worked on these many projects yet!</Tab.Pane>
                <Tab.Pane eventKey='third'>I haven't worked on these many projects yet</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
      </Container>
      {/* <img src={colorSharp2} alt="" className="background-image-right" /> */}
    </section>
    </>
  )
}

export default Project