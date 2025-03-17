import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import Footer from 'components/Footer';
import LoadingOverlay from 'components/LoadingOverlay';
import ScrollToTop from 'components/ScrollToTop';
import WhatsAppWidget from 'components/WhatsAppWidget';

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
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppWithLoading />
      <WhatsAppWidget phoneNumber='+996997007007' message='Здравствуйте!' /> 
    </BrowserRouter>
  );
}

export default App;
