import React from 'react'

import Hero from 'components/Hero'

import Gallery from '../Gallery'
import AboutObject from './AboutObject'
import BeforeAfter from './BeforeAfter'
import Location from './Location'
import MapImages from './MapImages'
import MasterPlan from './MasterPlan'
import ObjectMetrics from './ObjectMetrics'
import Features from './Features'
import Architecture from './Architecture'
import AnimatedSVG from '../../Users/Animation'
import img1 from '../../assets/images/Galerey/1.png'
import img2 from '../../assets/images/Galerey/2.png'
import img3 from '../../assets/images/Galerey/3.png'
import img4 from '../../assets/images/Galerey/4.png'
import img5 from '../../assets/images/Galerey/5.png'


const imgInterface: { image: string; description: string }[] = [
    { image: img1, description: "ЖК “Avangard City”" },
    { image: img2, description: "ЖК “Испанский дом”" },
    { image: img3, description: "ЖК “Испанский дом”" },
    { image: img4, description: "ЖК “Испанский дом”" },
    { image: img5, description: "ЖК “Испанский дом”" },
  ];
  
function Panarama() {
    return (
        <>
        <AnimatedSVG/>
            <Hero />
            <AboutObject />
            <ObjectMetrics />
            <BeforeAfter />
            {/* <Architecture /> */}
            <MasterPlan />
            <Gallery imgsSrc={imgInterface}/>
            <Location />
            <MapImages />
            <Features />
        </>
    )
}

export default Panarama