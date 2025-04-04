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
<<<<<<< Updated upstream
import FloorPlans from './FloorPlans'
=======
import SupBottom from './SupBottom'
>>>>>>> Stashed changes

function Panarama() {
    return (
        <>
            <Hero />
            <AboutObject />
            <ObjectMetrics />
            <BeforeAfter />
<<<<<<< Updated upstream
            <FloorPlans />
            {/* <Architecture /> */}
=======
            <Architecture /> 
>>>>>>> Stashed changes
            <MasterPlan />
            <Gallery />
            <Location />
            <MapImages />
            <Features />
            <SupBottom />
        </>
    )
}

export default Panarama