import React from 'react'

import Hero from 'components/Hero'

import Gallery from '../Gallery'
import AboutObject from './AboutObject'
import BeforeAfter from './BeforeAfter'
import Location from './Location'
import MasterPlan from './MasterPlan'
import MapImages from './MapImages'

function Panarama() {
    return (
        <>
            <Hero />
            <AboutObject />
            <BeforeAfter />
            <MasterPlan />
            <Gallery />
            <Location />
            <MapImages />

        </>
    )
}

export default Panarama