import React from 'react';
import { useState } from 'react'

import Icon from '../../../assets/icons/Vector.svg';

import './styles.scss';





const ConsultationForm: React.FC = () => {


  const [isDropDownOpen, setDropDownOpen] = useState<Boolean>(false)
  const [selectedOption, setselectedOption] = useState<string>('Тема')
  const [enteredNum, setEnteredNum] = useState<string>('+996')
  const [enteredName, setEnteredName] = useState<string>('Ваше имя')

  const DropDownOptions = ['Покупка недвижимости', 'Сотрудничество', 'Предложения']

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };
  const handleNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredNum(event.target.value);
  };

  const SubmitClickOn = () => {
    console.log(`Title of the request is "${selectedOption}"`)
    console.log(`User's name is ${enteredName}`)
    console.log(`User's phone number is "${enteredNum}"`)

  }

  return (
    <section className="consultation__form bg-[#fff]">
      <div className="container flex justify-center
    gap-[110px] px-[30px] pb-[50px] md:-[70px] xl:pl-[76px] xl:pr-[205px]">
        <div className="consultation__form-left 
      pt-[40px] pb-[40px] rounded-[30px] bg-[#00091b] max-w-[368px]
       max-h-[370px] md:max-w-[552px] md:max-h-[436px]  mt-[50px] md:mt-[96px]">
          <h2 className="consultation__form__title  text-center md:text-[30px] text-white text-[24px] font-normal">
            Получить консультацию
          </h2>
          <div className="consultation__form__inputs mx-[24px] flex flex-col  items-center  mt-[30px] md:mt-[40px]">
            <div className="consulation__form-popUp relative bg-white rounded-[30px]">
              <input type="text"
                value={selectedOption}
                onChange={(e) => setselectedOption(e.target.value)}
                className="consulation__form__select-title  focus:outline-none flex justify-between items-center text-[#4f4f4f] text-[20px] font-normal cursor-pointer"
                style={{ border: isDropDownOpen ? "1px solid black" : "transparent" }} />
              <img className='absolute  right-[15px] top-[20px]'
                onClick={() => setDropDownOpen(true)}
                src={Icon} alt="icon" />
              {isDropDownOpen && (
                <ul className="consulation__form-dropdown bg-white">
                  {DropDownOptions.map((option, index) => (
                    <li key={index}
                      className="consultation__form-item flex flex-col justify-between"
                      onClick={() => {
                        setDropDownOpen(false)
                        setselectedOption(option)
                      }}
                    >
                      <span className='pl-[20px] mt-[15px]'>{option}</span>
                      {index !== DropDownOptions.length - 1 && (
                        <hr className='flex bg-[#4f4f4f] w-[322px]  md:w-[504px] p-[0px]'></hr>
                      )}


                    </li>
                  )
                  )}


                </ul>
              )}
            </div>

            <div className={`consulation__form-dataInputs flex flex-col mt-[10px] md:mt-[15px] gap-[10px] md:gap-[15px] items-center ${isDropDownOpen ? "hidden" : "flex"}`}>
              <input type="text"
                className="consulation__form-name  focus:outline-none pl-[20px] 
        text-[#4f4f4f] text-[20px] font-normal"
                onChange={handleNameChange}
                defaultValue={enteredName} />
              <input type="tel" onChange={handleNumChange}
                className="consultation__form-number focus:outline-none pl-[20px] text-[#00091b] text-[20px] font-normal"
                defaultValue={enteredNum} />
            </div>
            <button onClick={() => SubmitClickOn()}
              className="consulation__form-submit  mt-[10px] md:mt-[15px] bg-[#00417d] font-normal text-[20px] text-white">Отправить</button>
          </div>
        </div>
        <div className="consulation__form-right mt-[164px] hidden xl:flex xl:flex-col">
          <h2 className="consultation__form-contact font-normal text-[50px]">Контакты</h2>
          <div className="consultation__form-links font-normal text-[30px] flex flex-col mt-[40px]">
            <a href="tel:+996312988958" className="consulation__form-tel1">
              +996 312 98 89 58</a>
            <a href="tel:+996312988958" className="consulation__form-tel1">
              +996 312 98 89 58</a>
            <a href="mailto:sales@avangardstyle.kg" className="consultation__form-email">sales@avangardstyle.kg</a>
            <a href="mailto:info@avangardstyle.kg" className="consultation__form-email">info@avangardstyle.kg</a>
          </div>
        </div>
      </div>
    </section>
  );

};

export default ConsultationForm;

