import { useState } from 'react';

import center from '../../assets/images/poster.webp'

import gal1 from '../../assets/images/BuisnessCenter/gal1.jpg';
import gal2 from '../../assets/images/BuisnessCenter/gal2.jpg';
import gal3 from '../../assets/images/BuisnessCenter/gal3.jpg';
import gal4 from '../../assets/images/BuisnessCenter/gal4.jpg';
import gal5 from '../../assets/images/BuisnessCenter/gal5.jpg';
import gal6 from '../../assets/images/BuisnessCenter/gal6.jpg';
import gal7 from '../../assets/images/BuisnessCenter/gal7.jpg';
import gal8 from '../../assets/images/BuisnessCenter/gal8.jpg';
import gal9 from '../../assets/images/BuisnessCenter/gal9.jpg';
import gal10 from '../../assets/images/BuisnessCenter/gal10.jpg';
import icon1 from '../../assets/images/BuisnessCenter/icon1.jpg';
import icon2 from '../../assets/images/BuisnessCenter/icon2.jpg';
import icon3 from '../../assets/images/BuisnessCenter/icon3.jpg';
import icon4 from '../../assets/images/BuisnessCenter/icon4.jpg';
import icon5 from '../../assets/images/BuisnessCenter/icon5.jpg';
import img1 from '../../assets/images/BuisnessCenter/img1.png';
import img2 from '../../assets/images/BuisnessCenter/img2.png';
import img3 from '../../assets/images/BuisnessCenter/img3.png';
import img4 from '../../assets/images/BuisnessCenter/img4.png';
import img5 from '../../assets/images/BuisnessCenter/img5.png';
import img6 from '../../assets/images/BuisnessCenter/img6.png';
import logo from '../../assets/images/logo-blue.svg';

import './styless.scss';

import { Autoplay,Pagination } from 'swiper/modules';
// import avangard from '../imgAmantur/avange.png'
import { Swiper, SwiperSlide } from 'swiper/react';

interface LocationProps {
    mapUrl: string;
    description: string;
}


const slides = [
    {
        id: 1,
        image: icon1,
        title: 'Современное офисное здание класса A',
        points: [
            'Сочетание функциональности и новейших инженерных достижений',
            'Идеальные условия для комфортной работы',
            'Офисные помещения от 30 м2 – до 1000 м2',
        ],
    },
    {
        id: 2,
        image: icon2,
        title: 'Аренда от собственника',
        points: [
            'Современные инженерные технологии для Вашего комфорта',
            'Отделка высокого качества',
            'Высота потолков - 3 метра',
            'Офисные помещения от 30 м2 – до 1000 м2',
        ],
    },
    {
        id: 3,
        image: icon3,
        title: 'Комфорт для бизнеса',
        points: [
            'Автоматическая вентиляция',
            'Котнроль уровня CO2',
            'Поддерживание заданной температуры',
            'Офисные помещения от 30 м2 – до 1000 м2',
        ],
    },
    {
        id: 4,
        image: icon4,
        title: 'Свобода мысли',
        points: [
            'Офисные помещение представляют собой открытые пространства',
            'Рабочие места согласно своим бизнес-потребностям',
            'Размер офиса может варьироваться от 30 м2 – до 1000 м2',
        ],
    },
    {
        id: 5,
        image: icon5,
        title: 'Экономия времени',
        points: [
            'Бизнес центр оборудован скоростными лифтами',
            'Обеспечивает автоматической системой управления лифтом',
            'Размер офиса может варьироваться от 30 м2 – до 1000 м2',
        ],
    },
];

const features = [
    {
        id: 1,
        icon: img1,
        text: 'ПРЕДЛАГАЕМ ВАМ ОФИСНЫЕ ПОМЕЩЕНИЯ ОТ 30 М²',
    },
    {
        id: 2,
        icon: img2,
        text: 'ОТДЕЛКА ОФИСОВ — ИЗ ВЫСОКОКАЧЕСТВЕННЫХ МАТЕРИАЛОВ',
    },
    {
        id: 3,
        icon: img3,
        text: 'РЕЖИМ РАБОТЫ БЦ 24 ЧАСА В СУТКИ, 7 ДНЕЙ В НЕДЕЛЮ',
    },
    {
        id: 4,
        icon: img4,
        text: 'СИСТЕМА БЕЗОПАСНОСТИ',
    },
    {
        id: 5,
        icon: img5,
        text: 'КОМФОРТНЫЕ УСЛОВИЯ ДЛЯ КЛИЕНТОВ',
    },
    {
        id: 6,
        icon: img6,
        text: 'БОЛЬШОЙ ПАРКИНГ',
    },
];



const BuisnessCenter: React.FC<LocationProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <body>
            <header className='header'>
                <div className="container">
                    <div className="header__content">
                        <div className="top-head flex pt-[10px] justify-around">
                            <div className="top-head__info">
                                <p className="top-head__addres">
                                    Бизнес-центр класса «А» Бишкек, ул.Токтогула, 125/1
                                </p>
                            </div>
                            <div className="top-head__info">
                                <button className="top-head__btn">Заказать обратный звонок</button>
                            </div>
                            <div className="top-head__info flex">
                                <a href="tel:+996508880847" className="top-head__phone">
                                    +996508880847 <br /> +996508880847
                                </a>
                            </div>
                        </div>

                        <div className="head pt-[20px] relative">
                            <div className="head__nav">
                                <nav className={`head__menu ${isOpen ? 'open' : ''}`}>
                                    <ul className="head__link flex justify-between items-center gap-4">
                                        <a href="#" className="head__img">
                                            <img src={logo} alt="logo" className="h-10" />
                                        </a>
                                        <li className="head__drop"><a href="#home">Главная</a></li>
                                        <li className="head__drop"><a href="#about">Бизнес-Центр</a></li>
                                        <li className="head__drop"><a href="#office">Офис</a></li>
                                        <li className="head__drop"><a href="#conference">Конференц-зал</a></li>
                                        <li className="head__drop"><a href="#contacts">Контакты</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={`burger ${isOpen ? 'burger--open' : ''}`} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="center">
                    <div className="center__content">
                        <div className="center__avangard">
                            <img src={center} alt="center" />
                            {/* <img src={avangard} alt="" className='absolute top-[3250px] left-[261px] h-[120px]' /> */}
                            <button className="center__btn absolute top-[3390px] left-[421px]">Подробнее</button>
                        </div>
                    </div>
                </section>
                <section className="business-center">
                    <div className="container">
                        <h2 className="business-center__title">О БИЗНЕС-ЦЕНТРЕ</h2>
                        <p className="business-center__description">
                            Бизнес-центр класса А уникальный по своему месторасположению и характеристикам объект,
                            представляет собой современное 12-ти этажное здание. В непосредственной близости от Бизнес-центра
                            находится большинство самых значимых учреждений города: Дом правительства, Мэрия г. Бишкек, несколько
                            Министерств. Близость банков, торговых центров, ресторанов и других общественных учреждений являются
                            преимуществом. Доступность к инфраструктуре городского транспорта делают местоположение центра удобным
                            как для подъезда на автомобиле, так и на общественном транспорте.
                        </p>

                        <div className="business-center__features">
                            {features.map(({ id, icon, text }) => (
                                <div className="feature" key={id}>
                                    <img src={icon} alt={`icon-${id}`} />
                                    <p className='md:text-[12px]' dangerouslySetInnerHTML={{ __html: text.replace(/ /g, '&nbsp;').replace(/–/g, '-') }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="buisness-youtube">
                    <div className="buisness-youtube__content">
                        <iframe width="100%" height="600px" src="https://www.youtube.com/embed/o974w5Y50zU?si=hCgygq3Tm6vhXqg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </section>
                <section className="callback bg-[#393f44] pb-[30px] pt-[45px]">
                    <div className="container">
                        <div className="callback__content">
                            <h2 className="callback__title text-[38px] border-b-[1px] border-white text-[#fff] uppercase">Наш менеджер с вами свяжется</h2>
                        </div>
                    </div>
                </section>
                <section className="swiper">
                    <div className="container">
                        <div className="swiper__content">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 4000 }}
                                loop
                                className="office-swiper"
                            >
                                {slides.map((slide) => (
                                    <SwiperSlide key={slide.id}>
                                        <div
                                            className="slide-content w-[5000px] h-[450px]"
                                            style={{ backgroundImage: `url(${slide.image})` }}
                                        >
                                            <div className="slide-overlay text-left">
                                                <h2 className='swiper__title'>{slide.title}</h2>
                                                <ul>
                                                    {slide.points.map((point, idx) => (
                                                        <li className='swiper__points  text-[18px] text-[#fff] ' key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className="conference">
                    <div className="container">
                        <div className="conference__content">
                            <h2 className="conference__title">
                                Конференц-залы
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="gallery">
                    <div className="container">
                        <div className="gallery__content">
                            <h2 className="gallery__title mb-[25px]">Галерея</h2>
                            <div className="gallery__img flex flex-wrap gap-[30px]">
                                <img src={gal1} alt="gal1" className='w-[23%]' />
                                <img src={gal2} alt="gal2" className='w-[23%]' />
                                <img src={gal3} alt="gal3" className='w-[23%]' />
                                <img src={gal4} alt="gal4" className='w-[23%]' />
                                <img src={gal5} alt="gal5" className='w-[23%]' />
                                <img src={gal6} alt="gal6" className='w-[23%]' />
                                <img src={gal7} alt="gal7" className='w-[23%]' />
                                <img src={gal8} alt="gal8" className='w-[23%]' />
                                <img src={gal9} alt="gal9" className='w-[23%]' />
                                <img src={gal10} alt="gal10" className='w-[23%]' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map">
                    <div className="container">
                        <div className="map__content">
                            <h2 className="map__title">Мы находимся здесь</h2>

                            <iframe className='map__yandex' src="https://yandex.com/map-widget/v1/?um=constructor%3A662616f57661b10a818ef8d517020ecdfc0464274f2df78f59f7465e942442fd&amp;source=constructor"></iframe>
                            <div className="map__card">
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__link">
                            <h2 className='footer__title'>ТЕЛЕФОНЫ</h2>
                            <ul className='footer__item'>
                                <li className='footer__link'>
                                    <i className="footer__phone"></i>
                                    <a href="tel:+996558009999">+996 558 00 99 99</a>
                                </li>
                                <li className='footer__link'>
                                    <i className="footer__phone"></i>
                                    <a href="tel:+996705504528">+996 705 50 45 28</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item">
                            <h3 className='footer__title'>АДРЕСА</h3>
                            <p>
                                <i className="footer__location"></i>
                                г. Бишкек, ул. Токтогула, 125/1 <br />
                                (между ул. Тоголок Молдо и Логвиненко)
                            </p>
                            <a href="#" aria-label="Facebook">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </div>

                        <div className="footer__item">
                            <form>
                                <input type="text" placeholder="Имя *" required />
                                <input type="tel" placeholder="Телефон *" required />
                                <input type="email" placeholder="E-mail" />
                                <button type="submit">Отправить</button>
                            </form>
                            <p className="footer__note">Наш менеджер с вами свяжется</p>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
    )
}
export default BuisnessCenter

