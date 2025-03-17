import React from 'react';
import { Link } from 'react-router-dom';

import { usePostMailingMutation } from 'api/about/about.api';
import { useGetContactQuery } from 'api/contact/contact.api';

import logoBlue from 'assets/images/logo-blue.svg';
import logoGray from 'assets/images/logo-gray.svg';
import logoRed from 'assets/images/logo-red.svg';

import './styles.scss';


type FooterLink = {
  label: string;
  href?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerData: FooterSection[] = [
  {
    title: 'Меню',
    links: [
      { label: 'О нас', href: '/about' },
      { label: 'Продажа', href: '/sales' },
      { label: 'Бизнес центр', href: 'https://bc-avangard.kg/' },
      { label: 'Фитнес клуб', href: 'https://avangardsport.kg/' },
      { label: 'Live', href: 'https://live.avangardstyle.kg/' }
    ]
  },
  {
    title: 'Полезное',
    links: [
      { label: 'Вакансии', href: '/vacancies' },
      { label: 'Закупки', href: '/procurement' },
      { label: 'СМИ о нас', href: '/smi' },
      { label: 'Контакты', href: '/contacts' }
    ]
  },
  {
    title: 'Адрес',
    links: [
      {
        label: 'БЦ "Авангард": Токтогула 125/1',
        href: 'https://maps.google.com/?q=Токтогула+125/1'
      },
      {
        label: 'Отдел продаж "Елисейские поля": Токомбаева 15/2',
        href: 'https://maps.google.com/?q=Токомбаева+15/2'
      },
      {
        label: 'Отдел продаж ГМ "Глобус": Токомбаева 53/1',
        href: 'https://maps.google.com/?q=Токомбаева+53/1'
      },
      {
        label: 'Отдел продаж в ЖК "Европа"',
        href: 'https://maps.app.goo.gl/4Rzmc8RdZeeC8Crr8'
      }
    ]
  }
];
const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__image w-[50%]">
            <div className="footer__image-cards">
              <img src={logoBlue} alt="logo" className='w-[169px] h-[53px]' />
              <p className="footer__description w-[207px] h-[46px]">
                Строительная компания
                “Авангард Стиль”
              </p>
            </div>
            <div className="footer__image-cards">
              <img src={logoGray} alt="logo" className='w-[169px] h-[53px]' />
              <p className="footer__description w-[207px] h-[46px]">
                Бизнес Центр
                “Авангард Бизнес Центр”
              </p>
            </div>
            <div className="footer__image-cards">
              <img src={logoRed} alt="logo" className='w-[169px] h-[53px]' />
              <p className="footer__description w-[207px] h-[46px]">
                Спортивны клуб
                “Авангард Спортивный клуб”
              </p>
            </div>
          </div>
          <ul className="footer__list w-[50%] ">
            {footerData.filter((section) => {
              return section.title !== 'Адрес';
            }).map((section)=> (
              <li key={section.title}>
                <h2 className="footer__title">{section.title}</h2>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <ul className="footer__adress w-full">
          {footerData.filter((section)=> {
            return section.title === 'Адрес'
          }).map((section) => (
            <li key={section.title}>
              <h2 className="footer__title">{section.title}</h2>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// {footerData.map((section) => (
//   <li key={section.title}>
//     <h3 className="footer__title">{section.title}</h3>
//     <ul>
//       {section.links.map((link) => (
//         <li key={link.label}>
//           <a href={link.href}>{link.label}</a>
//         </li>
//       ))}
//     </ul>
//   </li>
// ))}
