import React from 'react'
// import styled from 'styled-components'
import HomeHeader from '../components/homeComponent/HomeHeader'
import HomeConsultancy from '../components/homeComponent/HomeConsultancy'
import Agenda from '../components/homeComponent/Agenda'
import Client from '../components/homeComponent/Client'
import Review from '../components/homeComponent/Review'

function Home() {
    return (
        <div className="home">
            {/* create dummy data for files that needs it */}
            {/* create a seperate branch of your own */}
            <HomeHeader />
            <HomeConsultancy />
            <Agenda />
            <Client />
            <Review />
        </div>
    )
}



export default Home
