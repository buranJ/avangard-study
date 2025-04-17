import { Route, Routes } from 'react-router-dom';

import About from 'pages/About';
import AllObjects from 'pages/AllObjects';
import CompletedProjects from 'pages/CompletedProjects';
import ConstructionProgress from 'pages/ConstructionProgress';
import Contacts from 'pages/Contacts';
import FinishedProjectDetail from 'pages/FinishedProjectDetail';
import Home from 'pages/Home';
import News from 'pages/News';
import NewsDetail from 'pages/NewsDetail/NewsDetail';
import ObjectDetail from 'pages/ObjectDetail';
import Smi from 'pages/Smi';
import TechnicalBase from 'pages/TechnicalBase';
import { TenderDetail, TenderPage } from 'pages/Tender';
import Tour3D from 'pages/Tour3D';
import Vacancies from 'pages/Vacancies';
import Panarama from 'components/ObjectDetail/Panarama';
import NewsCard from "components/NewsCard/index.tsx"

import DefaultLayout from '../layouts/DefaultLayout';
import ObjectDetailLayout from '../layouts/ObjectDetailLayout';
// import BuisnessCenter from '../pages/';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/all-objects' element={<AllObjects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/news' element={<News />} />
        <Route path="/newscard" element={<NewsCard />} />
        <Route path='/technical-base' element={<TechnicalBase />} />
        {/* <Route path='/buisness-center' element={<BuisnessCenter />} /> */}
        <Route path='/smi' element={<Smi />} />
        <Route path="/procurement" element={<TenderPage />} />
        <Route path="/procurement/:id" element={<TenderDetail />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/completed-projects' element={<CompletedProjects />} />
        <Route path='/finished-project-detail/:slug' element={<FinishedProjectDetail />} />
        <Route path='/construction-progress' element={<ConstructionProgress />} />
        <Route path='/news-detail/:slug' element={<NewsDetail />} />
        <Route path='/3d-tour/:slug' element={<Tour3D />} />
        {/* <Route path="object-detail" element={<ObjectDetail />} /> */}
        <Route path='panarama' element={<Panarama />} />
      </Route>
      <Route element={<ObjectDetailLayout />}>
        <Route path='/object-detail/:slug' element={<ObjectDetail />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
