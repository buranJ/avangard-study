import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import Footer from 'components/Footer';
// import Hero from 'components/Hero';
import LoadingOverlay from 'components/LoadingOverlay';
import ScrollToTop from 'components/ScrollToTop';
import WhatsAppWidget from 'components/WhatsAppWidget';
import NewsDetail from 'pages/NewsDetail/NewsDetail';

// import Test from './users/Nazmi/Test';
// import ApartmentInfo from "./users/TestNews/Test"

const AppRoutes = React.lazy(() => import('router/routes'));

const AppWithLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fadeAnim, setFadeAnim] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setFadeAnim(true);
      const fade = setTimeout(() => {
        setIsLoading(false);
        setFadeAnim(false);
      }, 400);

      return () => clearTimeout(fade);
    }, 1800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} fadeAnim={fadeAnim} />
      <AppRoutes />
      {/* <Hero /> */}
      {/* <NewsDetail /> */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <ApartmentInfo/> */}
      <AppWithLoading />

      {/* <Test/> */}
      <WhatsAppWidget phoneNumber='+996997007007' message='Здравствуйте!' />
    </BrowserRouter>
  );
}

export default App;