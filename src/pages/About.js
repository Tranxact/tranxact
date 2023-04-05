import React from 'react'

function About() {
  const mission = `Our Mission is Simple: To help you get a home of your dreams`
  const about = `TranXact Real Estate is a real estate agency saddled with the 
  responsibility to providing housing and accomondation, buying and selling of 
  landed properties and auto. We enploy the service of well-trained and reliable agents.`
  return (
    <div className='about'>
      <div className="bg-about">
      <div className="blur">
        <h1 className="header-text">
          {mission}
        </h1>
      </div>
      </div>
      <div className="about_us">
        <h2>
        {about}
        </h2>
      </div>
    </div>
  )
}

export default About
