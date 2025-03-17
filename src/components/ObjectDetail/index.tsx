import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetObjectQuery } from 'api/objects/objects.api';
import Hero from 'components/Hero';

import Architecture from './Architecture';
import Location from './Location';
import MapImages from './MapImages';
import MasterPlan from './MasterPlan';

const BeforeAfter = lazy(() => import('./BeforeAfter'));
const Features = lazy(() => import('./Features'));
const FloorPlans = lazy(() => import('./FloorPlans'));
const ObjectMetrics = lazy(() => import('./ObjectMetrics'));
const ObjectView = lazy(() => import('./ObjectView'));
const ParkingPlan = lazy(() => import('./ParkingPlan'));
const SupBottom = lazy(() => import('./SupBottom'));
const WhatInteresting = lazy(() => import('./WhatInteresting'));
const AboutObject = lazy(() => import('./AboutObject'));


import './styles.scss';

const ObjectDetailPage = () => {
  const { slug } = useParams();
  const { data: objectQuery, isLoading, isError } = useGetObjectQuery({ slug: slug as string });


 


  const bannerSrc = useMemo(() => {
    if (!objectQuery) return '';

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return isMobile && objectQuery.banner_phones ? objectQuery.banner_phones : objectQuery.banner || '';
  }, [objectQuery]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;
  if (!objectQuery) return <h1>Not found</h1>;
 
  return (
    <>
      <Hero
        pageName='objects-detail bg-black/50 bg-blend-overlay h-[97%]'
        videoSrc={bannerSrc}
        bannerSrc={objectQuery?.banner_img}
        className='h-full flex items-end justify-center md:items-end md:justify-start'
        children={
          <></>
        }
      />
      <Suspense fallback={<div></div>}>
        {objectQuery?.about_complex && <AboutObject {...objectQuery.about_complex} />}
        {objectQuery?.object_metrics && <ObjectMetrics title={`${objectQuery.title} в цифрах`} metrics={objectQuery.object_metrics} />}
        {objectQuery.before_after && <BeforeAfter {...objectQuery.before_after} />}
        {objectQuery.floor_plans?.floorschemas.length && <FloorPlans floorschemas={objectQuery.floor_plans.floorschemas} />}
        {objectQuery.parking_plan.images.length && <ParkingPlan {...objectQuery.parking_plan} />}

        {objectQuery.title !== 'Елисейские поля' && objectQuery.title !== 'Москва' && <Architecture {...objectQuery.architecture} />}

        {objectQuery.numeration && <MasterPlan {...objectQuery.numeration} />}

        {objectQuery.gallery && <ObjectView {...objectQuery.gallery} />}
        {objectQuery.advantages && <Features advantages={objectQuery.advantages} />}
        {objectQuery.location && (
          <Location mapUrl={objectQuery.location.location_iframe_url} description={objectQuery.location.location_description} />
        )}
        {objectQuery.location && <MapImages images={objectQuery.location} />}
        {objectQuery.interest_nearby && <WhatInteresting data={objectQuery.interest_nearby.interest_nearby} />}
        {objectQuery.footer && <SupBottom {...objectQuery.footer} />}
      </Suspense>
    </>
  );
};

export default ObjectDetailPage;

