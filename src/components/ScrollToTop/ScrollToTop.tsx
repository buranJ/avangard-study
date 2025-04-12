import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = (  ) => {
    const { pathname } = useLocation()

    useEffect(() => {
    }, [pathname])
    window.scrollTo({ top: 0, behavior: "auto" })
    return null
};

export default ScrollToTop;

