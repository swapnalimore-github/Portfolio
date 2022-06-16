import React from 'react';
import { AboutMe } from '../Components/AboutMe';
import { WhatIDo } from '../Components/WhatIDo';
import Records from "../db/about.json"

export const About = () => {
  const about = Records.about
  // const whatIDO = Records[2]
  console.log(Records)
  return (
    <>
      <AboutMe about={about} />
      {/* <WhatIDo whatIDO={whatIDO} /> */}
    </>
  )
}
