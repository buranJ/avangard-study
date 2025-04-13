import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero'

// import AnimatedSVG from '../../Users/Animation'
import Gallery from '../Gallery'
import Logo from '../../Users/Animation'
import AboutObject from './AboutObject'
import BeforeAfter from './BeforeAfter'
import FloorPlans from './FloorPlans'
import Location from './Location'
import MapImages from './MapImages'
import MasterPlan from './MasterPlan'
import ObjectMetrics from './ObjectMetrics'

import Features from './Features'
import Architecture from './Architecture'
  
import SupBottom from './SupBottom'
import VacanciesPage from 'components/Vacancies'

function Panarama() {
    const { slug } = useParams();
    const { data: objectQuery, isLoading, isError } = useGetObjectQuery({ slug: 'panoramapark' as string });

    return (
        <>
            <Logo/>
            
            <Hero />
            <AboutObject Data = {objectQuery?.about_complex} />
            <ObjectMetrics />
            <BeforeAfter /> 
            <FloorPlans />
            <Architecture />
            <MasterPlan gen_plan={objectQuery?.numeration} image ={objectQuery?.numeration?.image}/>
            <Gallery imgsSrc={objectQuery?.gallery?.images}/>
            <Location />
            {/* <WhatInteresting /> */}
            <MapImages />
            <Features />
            <VacanciesPage/>
            <SupBottom />
        </>
    )
}

export default Panarama