import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { SocialMedia } from '../Components/SocialMedia';

export const HireMe = () => {
  return (
    <section className='contact'>
      <Container>
        <Row>
          <Col xs={8} className="mb-4 mx-auto text-center">
            <div className='portfolio__content'>
              <h2 className='display-4 mb-4'>Contact</h2>
              <p className='desc-1 mb-4'>
                Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to simon.doe@yourwebsite.com
                Want to get connected? Follow me on the social channels below.
              </p>

              <SocialMedia />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
