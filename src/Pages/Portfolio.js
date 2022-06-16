import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { PortfolioCard } from '../Components/PortfolioCard';

export const Portfolio = () => {
  return (
    <section className='portfolio'>
      <Container>
        <Row className='mb-5'>
          <Col xs={8} className="mb-4 mx-auto text-center">
            <div className='portfolio__content'>
              <h2 className='display-4 mb-4'>Portfolio</h2>
              <p className='desc-1 mb-5'>
                I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.
              </p>

              <Button variant="primary">Hire Me</Button>
            </div>
          </Col>

        </Row>
        <Row>
          <Col xs={3}>
            <PortfolioCard />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
