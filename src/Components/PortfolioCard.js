import React from 'react';
import { NavLink } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export const PortfolioCard = () => {
  return (
    <NavLink className='portfolio__card text-center'>
        <Image fluid={true} className="mb-4" src="Assets/Images/" alt="" />
        <h4 className='display-6'>Title</h4>
    </NavLink>
  )
}
