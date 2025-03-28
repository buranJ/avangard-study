import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
// import Hero from 'components/Hero';
import LoadingOverlay from 'components/LoadingOverlay';
import ScrollToTop from 'components/ScrollToTop';
import WhatsAppWidget from 'components/WhatsAppWidget';

// import Test from './users/Nazmi/Test';
// import ApartmentInfo from "./users/TestNews/Test"

const AppRoutes = React.lazy(() => import('router/routes'));
const mockMenuData: MenuItem[] = [
  { label: "О нас", link: "#", hasDropdown: true },
  { label: "Объекты", link: "#", hasDropdown: true },
  { label: "Бизнес центр", link: "#" },
  { label: "Фитнес клуб", link: "#" },
  { label: "Live", link: "#" },
  { label: "3D тур", link: "#", hasDropdown: true },
  { label: "СМИ", link: "#" },
  { label: "Контакты", link: "#" },
];

const mockConsultationNumber = 123456789;

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
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header menuData={mockMenuData} consultationNumber={mockConsultationNumber} />
      <ScrollToTop />
      {/* <ApartmentInfo/> */}
      <AppWithLoading />

      {/* <Test/> */}
      <WhatsAppWidget phoneNumber='+996997007007' message='Здравствуйте!' />
    </BrowserRouter>
  );
}

export default App;