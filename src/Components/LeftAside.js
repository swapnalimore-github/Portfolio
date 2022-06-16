import React from 'react'
import { Nav } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { SocialMedia } from './SocialMedia';
import { BsFillPersonFill, BsFillLaptopFill, BsFillBriefcaseFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Records from "../db/about.json";

export const LeftAside = () => {
  const about = Records.about
  return (
    <aside className='left-container'>
      <div className='profile text-center'>
        <h1 className='profile-title mb-4'>{about.name}</h1>

        <Image roundedCircle={true} fluid={true} className="profile-img mb-4" src={about.imgIntro} alt="Profile" />

        <p className='profile-text mb-4'>{about.shortIntro}</p>

        <SocialMedia />
      </div>

      <hr className='border my-5' />

      <Nav defaultActiveKey="/about-me" className="flex-column navigation">
        <NavLink to="/about-me"><BsFillPersonFill /> About Me</NavLink>
        <NavLink to="/portfolio"><BsFillLaptopFill /> Portfolio</NavLink>
        <NavLink to="/hire-me"><BsFillBriefcaseFill /> Hire Me</NavLink>
      </Nav>

      <hr className='border my-5' />
    </aside>
  )
}
