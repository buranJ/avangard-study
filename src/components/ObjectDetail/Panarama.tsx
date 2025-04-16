import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero'
import VacanciesPage from 'components/Vacancies'

import Logo from '../../Users/Animation'
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

function Panarama() {
    const { slug } = useParams();
    const { data: objectQuery, isLoading, isError } = useGetObjectQuery({ slug: 'panoramapark' as string });
    const [activeImg, setActiveImg] = useState<string>("")

    return (
        <>
            <Logo />

            <Hero />
            <AboutObject Data={objectQuery?.about_complex} />
            <ObjectMetrics />
            <BeforeAfter />
            <FloorPlans />
            <Architecture />
            <MasterPlan gen_plan={objectQuery?.numeration} image={objectQuery?.numeration?.image} />
            <Gallery imgsSrc={objectQuery?.gallery?.images} activeImg={activeImg} setActiveImg={setActiveImg} /> {/*не трогать*/}
            <Location mapUrl={objectQuery?.location.location_iframe_url} description={objectQuery?.location.location_description} />
            {/* <WhatInteresting /> */}
            <MapImages images={[objectQuery?.location?.location_image_first, objectQuery?.location?.location_image_second]} />
            <Features />
            <SupBottom />
        </>
    )
}

export default Panarama