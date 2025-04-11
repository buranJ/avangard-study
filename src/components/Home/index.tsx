import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetHomeInfoQuery } from 'api/home/home.api';
import { useGetObjectQuery } from 'api/objects/objects.api';


const HomeHero = React.lazy(() => import('./Hero'));
const OngoingProjects = React.lazy(() => import('./OngoingProjects'));
const News = React.lazy(() => import('./News'));
const ConsultationForm = React.lazy(() => import('./ConsultationForm'));

export type MenuItem = {
  id: string;
  label: string;
  url?: string;
  external?: boolean;
  anchor?: boolean;
  subMenu?: MenuItem[];
};

const LazyComponent = ({ Component }: { Component: React.FC }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return <div ref={ref}>{inView ? <Component /> : <div></div>}</div>;
};

const HomePage = () => {
  // console.log(useGetHomeInfoQuery);
  const { data } = useGetHomeInfoQuery();
  // const { objData } = useGetObjectQuery()
  // console.log(objData);
  // console.log(data);
  const heroData = {
    banner: data?.banner,
    first_key: data?.first_key,
    first_value: data?.first_value,
    second_key: data?.second_key,
    second_value: data?.second_value,
    third_key: data?.third_key,
    third_value: data?.third_value
  };

  return (
    <>
      <React.Suspense fallback={<div></div>}>
        <LazyComponent Component={() => <HomeHero {...heroData} />} />
        {/* <LazyComponent Component={OngoingProjects} /> */}
        <LazyComponent Component={News} />
        <LazyComponent Component={ConsultationForm} />
      </React.Suspense>
    </>
  );
};

export default HomePage;

