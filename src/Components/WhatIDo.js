import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaJs, FaReact, FaAngular, FaNpm, FaGulp, FaHtml5, FaCss3Alt, FaSass, FaLess } from "react-icons/fa";

export const WhatIDo = (props) => {
    // const whatIDO = props.whatIDO
    // console.log(whatIDO)
    return (
        <section className='whatIDo'>
            <Container>
                <Row>
                    <Col xs={12} className="mb-4">
                        <div className='whatIDo__content'>
                            <h2 className='display-3'>What I do</h2>
                            <p className='desc-1'>
                                I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.
                            </p>
                        </div>
                    </Col>
                    {/* {whatIDO.map(e => {
                        return(
                            <Col xs={3}>
                        <div className='whatIDo__skills'>
                            <FaJs color='#F1DE4F' />
                            <h5 className='display-6 mb-3 mt-4'>{e.name}</h5>

                            <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </Col>
                        )
                    })} */}
                    
                    {/* <Col xs={3}>
                        <div className='whatIDo__skills'>

                            <FaReact color='#62D4FA' /><FaAngular color='#CA3327' />
                            <h5 className='display-6 mb-3 mt-4'>React, Angular</h5>

                            <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className='whatIDo__skills'>
                            <FaNpm color='#BB443E' /> <FaGulp color='#C9514E' />
                            <h5 className='display-6 mb-3 mt-4'>npm, Gulp</h5>

                            <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className='whatIDo__skills'>
                            <FaHtml5 color='#DE6E3C' /> <FaCss3Alt color='#53A7DC' />
                            <h5 className='display-6 mb-3 mt-4'>HTML & CSS</h5>

                            <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className='whatIDo__skills'>
                            <FaSass color='#BF6B97' /> <FaLess color='#324B7C' />
                            <h5 className='display-6 mb-3 mt-4'>Sass & LESS</h5>

                            <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}
