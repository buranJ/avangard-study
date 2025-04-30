import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero'
import VacanciesPage from 'components/Vacancies'

import Logo from '../../users/Animation'
import Gallery from '../Gallery'
// import Logo from '../../Users/Animation'
// import Logo from '../../Users/Animation'
import AboutObject from './AboutObject'
import Architecture from './Architecture'
// import BeforeAfter from './BeforeAfter'
import Features from './Features'
import FloorPlans from './FloorPlans'
import Location from './Location'
import MapImages from './MapImages'
import MasterPlan from './MasterPlan'
import ObjectMetrics from './ObjectMetrics'
import SupBottom from './SupBottom'


function Panarama() {
    const { slug } = useParams();
    const { data: objectQuery, isLoading, isError } = useGetObjectQuery({ slug: 'panoramapark' as string });

    return (
        <>
            <Logo/>
            
    

            <Hero />
            <AboutObject Data={objectQuery?.about_complex} />
            <ObjectMetrics />
            {/* <BeforeAfter /> */}
            <FloorPlans />
            {objectQuery?.architecture?.architecture?.[0]?.features &&
                objectQuery?.architecture?.architecture?.[1]?.features && (
                    <Architecture
                        materials={objectQuery.architecture.architecture[0].features}
                        facades={objectQuery.architecture.architecture[1].features}
                    />
                )}
            <MasterPlan gen_plan={objectQuery?.numeration} image={objectQuery?.numeration?.image} />
            <Gallery imgsSrc={objectQuery?.gallery?.images}  />
            {/* <Gallery imgsSrc={objectQuery?.gallery?.images} activeImg={activeImg} setActiveImg={setActiveImg} />  */}
            <Location mapUrl={objectQuery?.location.location_iframe_url} description={objectQuery?.location.location_description} />
            {/* <WhatInteresting /> */}
            <MapImages />
            <Features />
            <SupBottom youtube_url={objectQuery?.footer.youtube_url}/>
            {/* <BuisnessCenter /> */}
        </>
    )
}

export default Panarama