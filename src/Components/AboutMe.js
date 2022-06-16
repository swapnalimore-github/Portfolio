import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { BsFillArrowRightCircleFill, BsFillFileEarmarkTextFill } from "react-icons/bs";

export const AboutMe = (props) => {
    const about = props.about
    return (
        <section className='aboutMe'>
            <Container>
                <Row>
                    <Col xs={7}>
                        <div className='aboutMe__content'>
                            <h2 className='display-2 font-weight-bold'>{about.name}</h2>

                            <h5 className='display-6 mb-4'>{about.designation}</h5>

                            <p className='desc-1 mb-5'>{about.intro}</p>
                            <Button variant="primary"><BsFillArrowRightCircleFill className='me-2' /> View Portfolio</Button>{' '}
                            <Button variant="secondary" className="ms-3"><BsFillFileEarmarkTextFill className='me-2' />View Resume</Button>{' '}
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div className='aboutMe__img'>
                            <Image roundedCircle={true} fluid={true} className="profile-img mb-4" src={about.profileImg} alt="Profile" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
