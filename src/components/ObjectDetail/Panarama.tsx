import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero'
import VacanciesPage from 'components/Vacancies'

import Logo from '../../Users/Animation'
import Gallery from '../Gallery'
// import Logo from '../../Users/Animation'
import AboutObject from './AboutObject'
import Architecture from './Architecture'
import BeforeAfter from './BeforeAfter'
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
            <Logo />
            <Hero />
            <AboutObject Data={objectQuery?.about_complex} />
            <ObjectMetrics />
            <BeforeAfter />
            <FloorPlans />
            <Architecture    materials={objectQuery?.architecture.architecture[0].features}
                facades={objectQuery?.architecture.architecture[1].features} />
            <MasterPlan gen_plan={objectQuery?.numeration} image={objectQuery?.numeration?.image} />
            {/* <Gallery imgsSrc={objectQuery?.gallery?.images} activeImg={activeImg} setActiveImg={setActiveImg} /> не трогать */}
            <Location mapUrl={objectQuery?.location.location_iframe_url} description={objectQuery?.location.location_description} />
            {/* <WhatInteresting /> */}
            <MapImages />
            <Features />
            <SupBottom />
            {/* <BuisnessCenter /> */}
        </>
    )
}

export default Panarama