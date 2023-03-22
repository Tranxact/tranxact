import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>contact</Link></li>
            <li><Link to='/faqs'>FAQs</Link></li>
            {/* <Link to=''>Fashion</Link> */}
        </div>
    )
}

export default Navbar
