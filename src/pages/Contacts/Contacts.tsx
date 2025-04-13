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
  const ContactsData = useGetContactQuery()
  console.log(ContactsData)
  const AddressArr = ContactsData.currentData?.address
  const SalesOfficeArr = ContactsData.currentData?.sales_offices
  const SocialMedia = ContactsData.currentData?.socials
  const SomReq = ContactsData.currentData?.som_requisites
  const DollarReq = ContactsData.currentData?.dollar_requisites
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
    <section className="contacts p-[0px] m-[50px]">
      <div className="container">
        <div className="contacts__content pt-[52px] md:pt-[70px] pb-[50px] md:pb-[90px] font-normal text-[#00091b]">
          <h2 className="contacts__title text-center text-[24px] md:text-[50px]">Контакты</h2>
          <p className="contacts__des text-center text-[15px] md:text-[20px] mt-[30px] md:mt-[50px]">Позвоните или напишите нам, если у Вас есть вопросы или Вы хотите получить консультацию по покупке недвижимости. Мы всегда будем рады ответить на все Ваши вопросы. Ниже перечислены все контакты, номера и адреса строительной компании «Авангард Стиль»</p>
          <div className="contacts__adress__block mt-[50px] md:mt-[90px]">
            <h3 className="address__us text-[19px] text-center md:text-[30px] md:text-start">Наши адреса</h3>
            <ul className="address__details flex flex-col gap-[15px] text-center md:text-start text-[15px] md:text-[20px] mt-[30px] md:mt-[50px]">
              {AddressArr?.map((item, index) => (
                <li key={index}
                  className="flex flex-col gap-[10px]  md:flex-row">
                  <span className='mr-[20px]'>{item.title}</span>
                  {item.value}
                </li>
              ))}
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
                {SalesOfficeArr?.slice(0, 1).map((item, index) => (
                  <div className="contacts__date mt-[50px] md:mt-[90px] text-center md:text-start">
                    <h3 className="date__title text-[19px] md:text-[30px]">{item.name}</h3>
                    <ul dangerouslySetInnerHTML={{ __html: item.description }}
                      className="date__list mt-[10px] flex flex-col gap-[10px]">
                    </ul>
                  </div>
                ))}


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
              {SalesOfficeArr?.slice(1, 3).map((item, index) => (
                <div className="contacts__date mt-[50px] md:mt-[90px] text-center md:text-start">
                  <h3 className="date__title text-[19px] md:text-[30px]">{item.name}</h3>
                  <ul dangerouslySetInnerHTML={{ __html: item.description }}
                    className="date__list mt-[10px] flex flex-col gap-[10px]">
                  </ul>
                </div>
              ))}
            </div>
            <div className="contacts__social__media flex  gap-[15px] lg:gap-[50px] xl:gap-[83px] justify-center mt-[50px] md:mt-[90px]">
              {SocialMedia?.map((item) => (
                <a href={item.link} className={`${item.title}`}>
                  <img key={item.id}
                    src={item.svg}
                    className="lg:w-[76px] lg:h-[76px]"
                  ></img>
                </a>
              ))}
            </div>
            <div className="contacts__banking-details mt-[50px] lg:mt-[90px]
                            text-center lg:text-start">
              <h5 className="banking__title text-[19px] md:text-[30px]">Наши реквизиты:</h5>
              <div className="banking__list flex flex-col gap-[10px] mt-[30px] lg:mt-[50px]">
                <p>{ContactsData.currentData?.title}</p>
                <p>ИНН: {ContactsData.currentData?.inn}</p>
                <p>ОКПО:{ContactsData.currentData?.okpo}</p></div>

            </div>

          </div>

          <div className="contacts__check mt-[50px] md:mt-[90px]">
            <h5 className="check__title  text-center md:text-start text-[19px] md:text-[30px]">Реквизиты для входящих денежных переводов в кыргызский сомах</h5>
            {SomReq?.map((item, index) => (
              <div className="check__list mt-[30px] md:mt-[50px] grid gap-y-4">
                <div key={index} className="grid grid-cols-2 gap-x-8">
                  <div>{item.title}</div>
                  <div dangerouslySetInnerHTML={{__html: item.description}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="contacts__transfer mt-[50px] md:mt-[90px]">
            <h6 className="transfer__title text-[19px] md:text-[30px]">Реквизиты для входящих денежных
              переводов в USD</h6>
            <div className="transfer__wrapper  flex flex-col  mt-[30px] md:mt-[50px] text-[15px] md:text-[20px]">
              <div className="transfer__orderAndinfo grid gap-y-4">
              {DollarReq?.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 gap-x-8">
                    <div>{item.title}</div>
                    <div dangerouslySetInnerHTML={{__html: item.description}}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};






