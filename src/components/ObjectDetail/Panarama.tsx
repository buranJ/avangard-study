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
import FloorPlans from './FloorPlans'
import SupBottom from './SupBottom'

function Panarama() {
    return (
        <>
            <Hero />
            <AboutObject />
            <ObjectMetrics />
            <BeforeAfter />
            <FloorPlans />
            <Architecture /> 
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