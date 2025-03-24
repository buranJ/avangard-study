import { FC, useEffect, useState } from 'react';
import './styles.scss';

interface CompanyStats {
  since: number;
  trust: string;
  projectsBuilt: number;
  totalArea: number;
  operationalStatus: string;
}
// interface IProps {
//   banner?: string;
//   first_key?: string;
//   first_value?: number;
//   second_key?: string;
//   second_value?: number;
//   third_key?: string;
//   third_value?: number;
// }
export const companyData: CompanyStats = {
  since: 1998,
  trust: "Доверие, заслуженное годами",
  projectsBuilt: 155,
  totalArea: 700000,
  operationalStatus: "Введено в эксплуатацию",
};

const Hero: FC = () => {
  const [animatedSince, setAnimatedSince] = useState(0);
  const [animatedProjectsBuilt, setAnimatedProjectsBuilt] = useState(0);
  const [animatedTotalArea, setAnimatedTotalArea] = useState(0);

  useEffect(() => {
    const animateNumber = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      let startTime: number | null = null;

      const updateNumber = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        callback(value);

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    };

    animateNumber(0, companyData.since, 2000, setAnimatedSince);
    animateNumber(0, companyData.projectsBuilt, 2000, setAnimatedProjectsBuilt);
    animateNumber(0, companyData.totalArea, 2000, setAnimatedTotalArea);
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content md:flex justify-around items-center">
          <div className="hero__text">
            <div className="hero__text-big">
              <h2 className="hero__since md:text-[80px]">
                SINCE {animatedSince}
              </h2>
              <p className="hero__description md:text-[25px]">
                {companyData.trust}
              </p>
            </div>
          </div>
          <div className="hero__buttom">
            <div className="hero__buttom-small">
              <h2 className="hero__buttom-title md:text-[80px]">
                {`>${animatedTotalArea.toLocaleString()} м²`}
              </h2>
              <p className="hero__buttom-description md:text-[25px]">
                {companyData.operationalStatus}
              </p>
            </div>
            <div className="hero__buttom-small">
              <h2 className="hero__buttom-title md:text-[80px]">
                &gt;{animatedProjectsBuilt}
              </h2>
              <p className="hero__buttom-description md:text-[25px]">
                Построили объектов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
