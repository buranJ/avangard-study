import React from 'react'
import { useParams } from 'react-router-dom';

import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero'
import VacanciesPage from 'components/Vacancies'

import Gallery from '../Gallery'
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
import WhatInteresting from './WhatInteresting'
function Panarama() {
    const { slug } = useParams();
    const { data: objectQuery, isLoading, isError } = useGetObjectQuery({ slug: 'panoramapark' as string });

    console.log(objectQuery?.architecture);
    return (
        <>
            <Hero />
            <AboutObject />
            <ObjectMetrics />
            <BeforeAfter />
            <FloorPlans />
            {/* <Architecture /> */}
            <Architecture />
            <MasterPlan />
            {/* <Gallery  imgsSrc={}/> */}
            <Location />
            <WhatInteresting />
            <MapImages />
            <Features />
            <VacanciesPage />
            <SupBottom />
        </>
    )
}

export default Panarama