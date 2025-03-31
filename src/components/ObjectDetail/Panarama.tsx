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

function Panarama() {
    return (
        <>
            <Hero />
            <AboutObject />
            <ObjectMetrics/>
            <BeforeAfter />
            <MasterPlan />
            <Gallery />
            <Location />
            <MapImages />
             <Features/>
        </>
    )
}

export default Panarama