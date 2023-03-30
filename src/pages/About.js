import React from 'react'

function About() {
  const mission = `Our Mission is Simple: To help you search, apply and secure jobs that help you advance your career without stress`
  return (
    <div className='about'>
      <div className="blur">
        <h1 className="header-text">
          {mission}
        </h1>
      </div>
    </div>
  )
}

export default About
