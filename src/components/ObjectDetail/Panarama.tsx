import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero'

// import AnimatedSVG from '../../Users/Animation'
import Gallery from '../Gallery'
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
import AnimatedSVG from '../../users/Animation'
import img1 from '../../assets/images/Galerey/1.png'
import img2 from '../../assets/images/Galerey/2.png'
import img3 from '../../assets/images/Galerey/3.png'
import img4 from '../../assets/images/Galerey/4.png'
import img5 from '../../assets/images/Galerey/5.png'


const imgInterface: { image: string; description: string }[] = [
    { image: img1, description: "ЖК “Avangard City”" },
    { image: img2, description: "ЖК “Испанский дом”" },
    { image: img3, description: "ЖК “Испанский дом”" },
    { image: img4, description: "ЖК “Испанский дом”" },
    { image: img5, description: "ЖК “Испанский дом”" },
];

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
            <AnimatedSVG />
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