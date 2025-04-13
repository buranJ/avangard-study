import { useState } from 'react';

import { useGetVacancyQuery } from '../../api/vacancy/vacancy.api';
import PageHeading from 'components/PageHeading';

import './styles.scss';

import { Phone } from 'lucide-react';
import arrowVac from '../../assets/images/arrow__vacancy.svg'
import styles from 'yet-another-react-lightbox/styles.css';
import { sendForm } from 'emailjs-com';




const VacanciesPage = () => {
    const VacancyData=useGetVacancyQuery()
    console.log(VacancyData)
    const [isTyping, setTyping] = useState<boolean>(false)
    const [isFile, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const SendCD = () => {
        if (isFile) {
            console.log("Sending file:", isFile);
        } else {
            console.log("No file selected");
        }
    };
    return (
        <section className="Vacancies">
            <div className="container">
                <div className="Vacancies__content mt-[150px] flex flex-col justify-center">
                    <div className="Vacancies__heading flex items-center justify-between w-full">
                            <img src={arrowVac} alt="arrow" />
                        <h1 className="Vacancies__title text-[24px] md:text-[36px] mx-auto">Вакансии</h1>
                    </div>
                    <div className="Vacancies__offer mt-[30px] md:mt-[50px] flex flex-col items-center text-center">
                        <h2 className="offer__title font-bold text-[28px] md:text-[36px]">ХОТИТЕ РАБОТАТЬ У НАС?</h2>
                        <p className="offer__des1 text-[#4a4a4a] mt-[32px]">Работа в строительной компании «Авангард Стиль» подразумевает соблюдение высокого уровня деловой этики, юридических обязательств, наших ценностей и Кодекса поведения, поддержки политик и процедур Компании.</p>
                        <p className="offer__des2  text-[#4a4a4a] mt-[16px]">Строительная Компания «Авангард Стиль» – это компания, в которой талантливые люди получают возможность расти и полностью раскрывать свой потенциал.</p>
                    </div>
                    <div className="Vacancies__card rounded-[8px] bg-[#f5f5f5] p-[32px] mt-[50px]">
                        <h3 className="card__title text-[20px] md:text-[24px] font-semibold">На что можно рассчитывать, работая в СК «Авангард Стиль»?</h3>
                        <ul className="card__list text-[#4a4a4a] flex flex-col gap-[30px] mt-[30px]">
                            <li className="card__item">В первую очередь, Вы будете работать в команде профессионалов, которые гордятся своими ежедневными достижениями. Вашим вкладом в развитие нашей компании.</li>
                            <li className="card__item">Мы ожидаем от вас многого! Каждый наш сотрудник работает над развитием своих профессиональных качеств, необходимых для полного раскрытия потенциала.</li>
                            <li className="card__item">Дело за тобой! Попади в команду лучших!</li>
                        </ul>
                    </div>
                    <ul className="Vacancies__condition-list flex flex-col self-start gap-[30px] mt-[70px] ">
                        <li className='condition__title text-[20px] font-semibold '>Условия работы:</li>
                        <li className='text-[#4a4a4a]'>Трудоустройство согласно ТК КР.</li>
                        <li className='text-[#4a4a4a]'>График работы: пн-пт 8:30-17:30.</li>
                        <li className='text-[#4a4a4a]'>Уютный офис в центре г. Бишкек</li>
                    </ul>
                    <div className="Vacancies__form flex flex-col place-self-center bg-white p-[32px] mt-[50px] max-w-[599px] ">
                        <h3 className="form__title mt-[24px] text-[24px] font-semibold text-center md:text-[24px]">Отправить резюме</h3>
                        <div className="form__input-wrapper mt-[20px] flex flex-col gap-[25px]">
                            <input type="text" className="form__name rounded-[4px] p-[12px]  border-[#E0E0E0] border-[1px] focus:border-black outline-none" placeholder='ВАШЕ ИМЯ' />
                            <input type="mailto" className="form__email rounded-[4px] p-[12px]  focus:border-black outline-none border-[1px]" placeholder='ВАШЕ Email' />
                            <div style={{ border: isTyping ? "1px solid black" : " 1px solid #E0E0E0" }}
                                className='form__tel-wrapper flex gap-[10px] items-center rounded-[4px] p-[12px] border-[#E0E0E0] border-[1px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E0E0E0" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone careers__phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <input type="tel"
                                    onFocus={() => {
                                        if (!isTyping) setTyping(true);
                                    }}
                                    onBlur={() => setTyping(false)}
                                    className="form__number outline-none" placeholder="(999) 999-999" />
                            </div>
                            <textarea className="form__name rounded-[4px]  border-[#E0E0E0] border-[1px] p-[12px] min-h-[120px]  focus:border-black outline-none" placeholder="СООБЩЕНИЕ" />
                        </div>
                        <div className="Vacancies__file flex flex-col">
                            <p className="file__CD text-[#4a4a4a] mt-[20px]">Прикрепите резюме (обязательно)</p>
                            <input type="file" onChange={handleFileChange}
                                className="file__accept mt-[10px]" accept=".pdf,.doc,.docx,.csv" />
                        </div>
                        <button onClick={() => SendCD()}
                            className="form__submit mt-[50px] 
             border-none bg-[#000] font-medium text-white py-[12px] px-[48px] rounded-[4px]">ОТПРАВИТЬ</button>
                    </div>
                    <div className="Vacancies__contacts flex flex-col text-center md:flex  mt-[40px] gap-[7px] justify-center text-[18px]">
                        <p className="contacts__text">По всем вопросам обращайтесь в отдел кадров</p>
                        <a href="+996 706 156 166" className="contacts__tel text-[#06c] font-semibold">{VacancyData.currentData?.phone}</a>
                    </div>




                </div>
            </div>
        </section>
    );



};

export default VacanciesPage;