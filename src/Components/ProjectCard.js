import React from 'react'
import { Col } from 'react-bootstrap'
import './../App.css'
function ProjectCard({title, description, imgUrl, redirect}) {
  return (
    <>
    <Col sm={6} md={4} className='card-card-card'>
        <a href={redirect}>
        <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
      </div>
        </a>
    </Col>
    </>
  )
}

export default ProjectCard