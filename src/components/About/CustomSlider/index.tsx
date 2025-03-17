import React, { useEffect } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface License {
    id: number;
    image: string;
    title: string;
}

interface CustomSliderProps {
    licenses: License[];
    uniqueId: string;
}

export const CustomSlider: React.FC<CustomSliderProps> = ({ licenses, uniqueId }) => {


    return (
        <>
        </>
    );
};

export default CustomSlider;