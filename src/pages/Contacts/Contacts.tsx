import { useState } from 'react';

import { useGetContactQuery } from 'api/contact/contact.api';
import PageHeading from 'components/PageHeading';

import { social } from './Contacts.helpers';

import './style.scss';

import './Contacts.helpers'
import { useMask } from '@react-input/mask';


const inputsInform = [
  {
    id: 1,
    type: "text",
    class: "name",
    placeholder: "Ваше имя",
  },
  {
    id: 2,
    type: "text",
    class: "email",
    placeholder: "Ваше email",
  },
  {
    id: 3,
    type: "text",
    class: "comment",
    placeholder: "Комментарий",
  },
  {
    id: 4,
    type: "tel",
    class: "number",
    defaultValue: "+996",
  },


]

export const Contacts = () => {
  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...isInputValue, [event.target.name]: event.target.value })
  }
  const [isInputValue, setInputValue] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    comment: "",
    number: ""
  })

  const HandleClick = () => {
    console.log(isInputValue)
  }

  return (
    <section className="contacts p-[0px] m-[0px]">
      <div className="container">
        <div className="contacts__content pt-[52px] md:pt-[70px] pb-[50px] md:pb-[90px] font-normal text-[#00091b]">
          <h2 className="contacts__title text-center text-[24px] md:text-[50px]">Контакты</h2>
          <p className="contacts__des text-center text-[15px] md:text-[20px] mt-[30px] md:mt-[50px]">Позвоните или напишите нам, если у Вас есть вопросы или Вы хотите получить консультацию по покупке недвижимости. Мы всегда будем рады ответить на все Ваши вопросы. Ниже перечислены все контакты, номера и адреса строительной компании «Авангард Стиль»</p>
          <div className="contacts__adress__block mt-[50px] md:mt-[90px]">
            <h3 className="address__us text-[19px] text-center md:text-[30px] md:text-start">Наши адреса</h3>
            <ul className="address__details flex flex-col gap-[15px] text-center md:text-start text-[15px] md:text-[20px] mt-[30px] md:mt-[50px]">
              <li className="flex flex-col gap-[10px]  md:flex-row">
                <span>Головной офис:</span>
                ул. Токтогула 125/1, Бизнес Центр «Avangard»,
                Tower A, 2-этаж</li>
              <li className="flex flex-col gap-[7px] md:flex-row"><span>Офис продаж:</span> 1-этаж</li>
              <li className="flex flex-col gap-[7px]  md:flex-row"><span>Офис продаж «Globus»:</span> ул. Токомбаева 53/1, гипермаркет «Globus» Офис</li>
              <li className="flex flex-col gap-[7px]  md:flex-row"> <span>продаж в ЖК "Елисейские Поля":</span> ул. Куттубаева 19</li>
              <li className="flex flex-col gap-[7px]  md:flex-row"><span>Юридический адрес:</span> ул. Токтогула 125/1</li>
            </ul>
            <div className="contacts__form-block  flex flex-col  lg:flex-row lg:justify-between mt-[50px] md:mt-[90px]">
              <div className="contacts__sale-wrapper">
                <div className="contacts__tels text-center md:text-start">
                  <h3 className="sale__title text-[19px] md:text-[30px]">Контакты офисов продаж:</h3>
                  <div className="sale__numbers mt-[30px] md:mt-[50px] flex flex-col gap-[10px] 
                                        text-[15px] md:text-[20px]">
                    <a href="tel:+996 312 98 89 58" className="sale__num">+996 312 98 89 58</a>
                    <a href="tel:+996 223 44 74 65" className="sale__num">+996 223 44 74 65</a>
                    <a href="mailto:sales@avangardstyle.kg" className="sale__email">sales@avangardstyle.kg</a>
                    <a href="mailto:info@avangardstyle.kg" className="sale__email">info@avangardstyle.kg</a>
                  </div>
                </div>
                <div className="contacts__date mt-[50px] md:mt-[90px] text-center md:text-start">
                  <h3 className="date__title text-[19px] md:text-[30px]">Центральный офис продаж БЦ<br></br>
                    “Авангард”:</h3>
                  <ul className="date__list flex flex-col gap-[10px]">
                    <li className="text-[15px] md:text-[20px] mt-[30px] md:mt-[50px]">Пн – Пт: с 8:30 до 18:00</li>
                    <li className="text-[15px] md:text-[20px]">Суббота: с 9:00 до 13:00</li>
                    <li className="text-[15px] md:text-[20px]">Воскресенье: выходной</li>
                  </ul>

                </div>
              </div>
              <div className="contacts__form   self-center mt-[50px] lg:mt-[0px] w-[370px] h-[418px] md:w-[552px] md:h-[525px]
                                rounded-[30px] md:rounded-[35px] bg-[#00091b]  pt-[35px] md:pt-[41px] flex flex-col items-center">
                <h4 className="form__title  text-white text-center text-[24px] md:text-[30px]">Получить <span className="md:uppercase">к</span>онсультацию</h4>
                <div className="form__inputs px-[20px] mt-[30px] md:mt-[40px] flex flex-col   gap-[10px] md:gap-[15px]">
                  {inputsInform.map((input) =>
                    <input
                      key={input.id}
                      type={input.type}
                      name={input.class}
                      className={`form__${input.class} rounded-[30px] pl-[20px] focus:outline-none w-[322px] h-[45px] md:w-[504px] md:h-[55px]`}
                      placeholder={input.placeholder}
                      defaultValue={input.id === 4 ? input.defaultValue : ""}
                      onChange={HandleChange}

                    />
                  )}

                </div>
                <button onClick={() => HandleClick()}
                  className="form__submit 
                                         w-full  max-w-[322px] md:max-w-[504px] h-full max-h-[45px] md:max-h-[55px]  rounded-[30px]
                                        mt-[25px] md:mt-[30px] bg-[#00417d] text-white text-[20px]">Отправить</button>
              </div>
            </div>
            <div className="contacts__stores flex flex-col
                             gap-[50px] text-center mt-[50px]  md:text-start md:mt-[82px] md:flex-row md:justify-between">
              <div className="store__content">
                <h4 className="store__title">Офис продаж «Globus»:</h4>
                <div className="store__list flex flex-col gap-[10px]">
                  <p className="store__time mt-[30px] md:mt-[50px]">Пн – Пт: с 9:30 до 19:00</p>
                  <p className="store__time">Суббота: с 10:30 до 16:00</p>
                  <p className="store__time">Воскресенье: выходной</p></div>

              </div>
              <div className="store__content">
                <h4 className="store__title">Офис продаж «Елисейские Поля»:</h4>
                <div className="store__list flex flex-col gap-[10px]">
                  <p className="store__time mt-[30px] md:mt-[50px]">Пн – Пт: с 9:30 до 18:00</p>
                  <p className="store__time">Суббота: с 10:30 до 16:00</p>
                  <p className="store__time">Воскресенье: выходной</p>
                </div>
              </div>
            </div>
            <div className="contacts__social__media flex  gap-[15px] lg:gap-[50px] xl:gap-[83px] justify-center mt-[50px] md:mt-[90px]">
              {social.map((item) => (
                <a href={item.link} className="social__links">
                  <img key={item.id}
                    src={item.icon}
                    className="lg:w-[76px] lg:h-[76px]"
                  ></img>
                </a>
              ))}
            </div>
            <div className="contacts__banking-details mt-[50px] lg:mt-[90px]
                            text-center lg:text-start">
              <h5 className="banking__title text-[19px] md:text-[30px]">Наши реквизиты:</h5>
              <div className="banking__list flex flex-col gap-[10px] mt-[30px] lg:mt-[50px]">
                <p>ОсОО «Строительная компания «Авангард стиль»</p>
                <p>ИНН: 00412199810063</p>
                <p>999 УГКНС ККН</p>
                <p>ОКПО:22116708</p></div>

            </div>

          </div>
          <div className="contacts__check mt-[50px] md:mt-[90px]">
            <h5 className="check__title  text-center md:text-start text-[19px] md:text-[30px]">Реквизиты для входящих денежных переводов в кыргызский сомах</h5>
            <div className="check__list mt-[30px] md:mt-[50px] grid gap-y-4">
              {[
                { label: "Получатель:", value: "Строительная компания Авангард Стиль ОСОО" },
                { label: "Счет получателя:", value: "1180000031018685" },
                { label: "БИК Банка получателя:", value: "118006" },
                { label: "Банк получателя:", value: "Филиал «ДКИБ – М.Горький» ЗАО«Демир Кыргыз Интернэшнл Банк»" },
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-x-8">
                  <div>{item.label}</div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>

          </div>
          <div className="contacts__transfer mt-[50px] md:mt-[90px]">
            <h6 className="transfer__title text-[19px] md:text-[30px]">Реквизиты для входящих денежных
              переводов в USD</h6>
            <div className="transfer__wrapper  flex flex-col  mt-[30px] md:mt-[50px] text-[15px] md:text-[20px]">
              <div className="transfer__orderAndinfo grid gap-y-4">
                {[
                  { label: "Beneficiary / Получатель:", value: "SC AVANGARD STIL LLC" },
                  { label: "Beneficiary account / Счет получателя:", value: "1180000031018584 USD" },
                  { label: "Beneficiary bank / Банк получателя:", value: "Demir Kyrgyz International Bank (Bishkek, Kyrgyzstan)" },
                  { label: "Beneficiary bank address / Адрес банка:", value: "245, Chui Ave., Bishkek, Kyrgyzstan / Кыргызстан, г. Бишкек, пр. Чуй 245" },
                  { label: "Beneficiary bank swift (BIC) / Swift банка:", value: "DEMIKG22" }
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-2 gap-x-8">
                    <div>{item.label}</div>
                    <div>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="tranfer__details mt-[35px] grid grid-cols-2 gap-[35px] ">
                <p className="detail__dollars">Correspondent bank for USD transfers / Банк
                  корреспондент для переводов в долларах</p>
                <ul className="data__details-list  flex flex-col gap-[25px]">
                  <li className="details__item">
                    KOOKMIN BANK (Seoul, South Korea)SWIFT BIC: CZNBKRSEAddress: Kookmin Bank H.Q, Sewoo Building, 115 Yeouigongwon-ro, Yeongdeungpo-gu, Seoul (Zip : 07241)
                  </li>
                  <li className="data__bank-details">Correspondent account of DemirBank: 8D2-8-USD-01-8</li>
                  <li className="details__item">
                    INTERMEDIARY BANKS:
                  </li>
                  <li className="details__item">1&#41;
                    JPMORGAN CHASE BANKSWIFT BIC: CHASUS33 Account#: 001 1 544111</li>
                  <li className="details__item">2&#41;
                    CITIBANKSWIFT BIC: CITIUS33 Account#: 36049172</li>
                  <li className="details__item">
                    3&#41; BANK OF AMERICA YORKSWIFT BIC: BOFAUS3N Account#: 6550694497</li>
                  <li className="details__item">
                    4&#41; THE BANK OF NEW MELLONSWIFT BIC: IRVTUS3N Account#: 8033256958</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};






