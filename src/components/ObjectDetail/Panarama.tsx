import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero'
import Gallery from '../Gallery'
import Logo from '../../Users/Animation'
import AboutObject from './AboutObject'
// import Architecture from './Architecture'
// import Architecture from './Architecture'
import BeforeAfter from './BeforeAfter'
// import Features from './Features'
// import Features from './Features'
import FloorPlans from './FloorPlans'
import Location from './Location'
import MapImages from './MapImages'
import MasterPlan from './MasterPlan'
import ObjectMetrics from './ObjectMetrics'

import Features from './Features'
import Architecture from './Architecture'
  
import SupBottom from './SupBottom'
import VacanciesPage from 'components/Vacancies'
import WhatInteresting from './WhatInteresting';

function Panarama() {
    const { slug } = useParams();
    const { data: objectQuery, isLoading, isError } = useGetObjectQuery({ slug: 'panoramapark' as string });
    const [activeImg, setActiveImg] = useState<string>("");

    console.log(objectQuery?.numeration);
    return (
        <>
            <Logo/>
            
            <Hero />
            <AboutObject Data = {objectQuery?.about_complex} />
            <ObjectMetrics />
            <BeforeAfter /> 
            <FloorPlans />
            <Architecture />
            <MasterPlan gen_plan={objectQuery?.numeration} image={objectQuery?.numeration?.image} />
            <Gallery imgsSrc={objectQuery?.gallery?.images} activeImg={activeImg} setActiveImg={setActiveImg} />
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