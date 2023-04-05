import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

function Navbar() {
    return (
        <div className="navbar">
            <TranXact><span className='tran'>T</span>ran<span className='tran'>X</span>act</TranXact>
            <List>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/faqs'>FAQs</Link></li>
            </List>
            {/* <Link to=''>Fashion</Link> */}
            <img src="/img/hamburger.png" alt="" className='ham'/>
        </div>
    )
}

const TranXact = styled.h2`
color: whitesmoke;
font-size: 30px;
font-weight: bold;
margin: 0%;
width: 50%;

.tran {
    color: purple;
    font-size: 40px;
}
@media screen and (max-width: 540px) {
    width: 90%;
}

`

const List = styled.ul`
display flex;
justify-content: space-between;
width: 50%;
@media screen and (max-width: 540px) {
    display: none;
}
`

export default Navbar
