import React from 'react'
import Header from '../../components/Header/Header'
import AboutUs from '../../components/AboutUs/AboutUs'
import Maecenas from '../../components/Maecenas/Maecenas'
import OurMission from '../../components/OurMission/OurMission'
import OurTeam from '../../components/OurTeam/OurTeam'
import SliderTest from '../../components/SliderTest/SliderTest'
import OurClients from '../../components/OurClients/OurClients'
import AboutPost from '../../components/AboutPost/AboutPost'

function AboutPage() {
  return (
    <div>
        <Header/>
        <AboutUs/>
        <Maecenas/>
        <OurMission/>
        <OurTeam/>
        <SliderTest/>
        <OurClients/>
        <AboutPost/>
    </div>
  )
}

export default AboutPage