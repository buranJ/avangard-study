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
    <>
    </>
  );
};

export default Footer;
