import React from 'react'

import Hero from 'components/Hero'

import AboutObject from './AboutObject'
import Location from './Location'
import MasterPlan from './MasterPlan'
import BeforeAfter from './BeforeAfter'

function Panarama() {
    return (
        <>
            <Hero />
            <AboutObject />
            <BeforeAfter />
            <MasterPlan />
            <Location />
        </>
    )
}

export default Panarama