import React from "react";
import "./styles.scss";
import { useEffect, useState } from "react";

interface LocationProps {
  mapUrl: string;
  description: string;
}

const Location: React.FC<LocationProps> = (location) => {
    const [isMobile,setIsMobile]=useState(window.innerWidth<=750)

    useEffect(()=>{
      const HandleMobile=()=>{
        setIsMobile(window.innerWidth<750)
      }
      window.addEventListener("resize",HandleMobile)
      return ()=> window.removeEventListener("resize",HandleMobile)
    },[])

  return (
    <section className="location mb-[0px]">
      <div className="container__location flex justify-center">
        <div className="location__content  px-[10px] py-[50px] lg:py-[0px] lg:pr-[55px] lg:pl-[0px] font-normal flex flex-col items-center lg:flex lg:flex-row lg:gap-[70px]">
          <h2 className="location__title text-[24px] text-[#00091b] text-center pb-[30px] lg:hidden">Локация</h2>
          <div  
          className="location__map"> 
          <iframe  
      style={{
        borderRadius: isMobile ? "25px" : "0 41px 41px 0",
        width: isMobile ? "370px" : "652px",
        height: isMobile ? "292px" : "515px", 
        transition: "all 0.3s ease-in-out", 
      }}
          src={location.mapUrl}></iframe>
          </div>
          <div className="location__information mt-[15px] lg:mt-[107px] flex flex-col gap-[70px]">
          <h2 className="location__title text-[50px] text-[#00091b] hidden lg:flex">Локация</h2>
          <div className="location__des md:pb-[50px] text-[15px] text-[rgba(0, 9, 27, 0.7)] md:text-[25px] max-w-[503px]">
       {location.description}
          </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Location;