

import { useGetVacancyQuery } from '../../api/vacancy/vacancy.api';
import PageHeading from 'components/PageHeading';

import './styles.scss';

import { Phone } from 'lucide-react';




const VacanciesPage = () => {
        return (
            <section className="Vacancies">
            <div className="container">
           <div className="Vacancies__content">
            <div className="Vacancies__heading">
            <h1 className="Vacancies__title">Вакансии</h1>
            </div>
            

           </div>
            </div>
            </section>
        );
   

   
};

export default VacanciesPage;