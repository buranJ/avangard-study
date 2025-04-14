import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import './style.scss';

const mockObjects = [
  {
    id: 1,
    title: "ЖК «Москва Сити»",
    subtitle: "Жилой комплекс премиум-класса",
    description:
      "Жилой комплекс «Москва Сити» воплощён в лучших архитектурных традициях Москвы. Он отличается не только высоким качеством строительства, но и уникальными стилистическими решениями.",
    bgClass: "bg-moskva-siti",
    link: "/moskva-siti",
  },
  {
    id: 2,
    title: "ЖК «Европа»",
    subtitle: "Жилой комплекс премиум-класса",
    description:
      "Добро пожаловать в жилой комплекс «Европа» — уникальное пространство для современной жизни. Просторные квартиры, зелёные зоны и развитая инфраструктура создают идеальные условия.",
    bgClass: "bg-evropa",
    link: "/evropa",
  },
  {
    id: 3,
    title: "ЖК «Москва»",
    subtitle: "Жилой комплекс премиум-класса",
    description:
      "Семь сталинских высоток Москвы — это символы советской эпохи, но многие современные здания сохраняют этот стиль и вносят современные элементы.",
    bgClass: "bg-moskva",
    link: "/moskva",
  },
  {
    id: 4,
    title: "«Елисейские поля»",
    subtitle: "Жилой комплекс премиум-класса",
    description:
      "ЖК «Елисейские поля» выполнен в лучших архитектурных традициях Франции. Эстетика и благополучие — он воплощает всё, с чем олицетворяется Париж.",
    bgClass: "bg-elisey",
    link: "/elisey",
  },
  {
    id: 5,
    title: "«Салкын-Тор»",
    subtitle: "Загородные резиденции",
    description:
      "Клубный коттеджный посёлок Салкын-Төр – лаконичность и благородство классики с уровнем комфорта и безопасности.",
    bgClass: "bg-salkyn",
    link: "/salkyn",
  },
  {
    id: 6,
    title: "«Panorama park»",
    subtitle: "Клубные дома премиум класса",
    description:
      "Уютный дом среди природы. Из окон — виды на горы, озарённые солнцем.",
    bgClass: "bg-panorama",
    link: "/panorama",
  },
];


const AllObjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {mockObjects.map((item, index) => (
        <div
          key={item.id}
          className={`w-full h-[466px] bg-cover bg-center flex items-center ${item.bgClass} md:h-[776px] md:px-10`}
        >
          <div
            className={`w-full max-w-[1440px] mx-auto px-5 flex ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}
          >
            <div
              className={`text-white flex flex-col gap-4 ${index % 2 !== 0 ? "text-right items-end" : ""
                }`}
            >
              <h2 className="font-[Vetren] text-[40px] md:text-[70px] uppercase">
                {item.title}
              </h2>
              <h3 className="font-[Google Sans] text-[19px] md:text-[30px]">
                {item.subtitle}
              </h3>
              <p className="font-[Google Sans] text-[13px] md:text-[23px] ">
                {item.description}
              </p>
              <div className="mt-50 md:mt-80 text-[15px] md:text-[20px]">
                <Button
                  label="Посмотреть подробнее"
                  size="small"
                  variant="primary"
                  onClick={() => navigate(`/objects/${item.id}`)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllObjectsPage;
