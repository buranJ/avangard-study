import React from 'react'

import Hero from 'components/Hero'

import Gallery from '../Gallery'
import AboutObject from './AboutObject'
import BeforeAfter from './BeforeAfter'
import Location from './Location'
import MasterPlan from './MasterPlan'

function Panarama() {
    return (
        <>
            <Hero />
            <AboutObject />
            <BeforeAfter />
            <MasterPlan />
            <Location />
            <Gallery/>
        </>
    )
}

export default Panarama