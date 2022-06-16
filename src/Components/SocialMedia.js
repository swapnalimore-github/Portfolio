import React from 'react'
import { ListGroup, NavLink } from 'react-bootstrap';
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const SocialMedia = () => {
  return (
    <ListGroup horizontal className='social-media justify-content-center'>
      <ListGroup.Item className='social-media-list'>
        <NavLink to={"/"}>
          <BsLinkedin />
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item className='social-media-list'>
        <NavLink to={"/"}>
          <BsGithub />
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  )
}
