// import { Link } from 'react-router-dom';

// import { useGetNewsQuery } from 'api/news/news.api';
// import NewsCard from 'components/NewsCard';

import { Link } from "react-router-dom";
import img from "../../../assets/images/News/image1.svg"
import img2 from "../../../assets/images/News/image2.svg"
import img3 from "../../../assets/images/News/image3.svg"
import scale from "../../../assets/images/News/Vector.svg"

import './styles.scss';


export interface IRaport {
  id: number;
  title: string;
  date: string;
  image: string;
}



export const mockData: IRaport[] = [
  {
    id: 1,
    title: "Стандарт паркинга в современном ЖК",
    date: "25.07.2024",
    image: img,
  },
  {
    id: 2,
    title: "Москва Сити Июнь 2024",
    date: "25.07.2024",
    image: img2,
  },
  {
    id: 3,
    title: "Елисейские поля Июнь 2024",
    date: "24.07.2024",
    image: img3,

  },
  
];
const News = () => {

  return (
    <>
      <section className="news mt-40 bg-[#00091B]  ">
        <div className="container mx-auto " >
          <div className="content md:max-w-[100%] " >
            <div className="flex justify-between items-center ">
              <h2 className=" text-white font-[700] text-[24px] " >Новости</h2>
              <Link to="/newscard" className="flex items-center gap-[20px] " >
                <span className="text-white font-[700] text-[24px] " >Еще</span>
                <img src={scale} alt="icon" />
              </Link>
            </div>
            <div className="news__main mt-[30px] grid gap-[15px] md:justify-between pb-[50px] md:flex  md:max-w-[100%] ">
              {mockData.map((item: IRaport) => {
                return <div key={item.id} className="news__content flex items-center md:text-center md:flex-col justify-between  md:max-w-[33%] bg-white py-[7px] px-[7px] rounded-[18px] " >
                  <div className="news__wrap md:relative flex md:block ">
                    <div className="image md:w-[330px] h-[120px] md:h-[240px] " >
                      <img src={item.image} alt="image" className=" w-[100%]  h-[100%]" />
                    </div>
                    <div className="max-w-[161px] ml-[15px] md:max-w-[307px] ">
                      <h2 className=" text-[19px] font-[500] md:text-[30px] md:mt-[10px] " >{item.title}</h2>
                      <a href="#"><p className=" md:absolute md:top-[2%] md:right-[5%]   font-[500] mt-[10px] text-[15px] px-[15px] py-[10px] bg-[#00091B] text-white rounded-[62px] max-w-[107px] flex items-center justify-center  " >{item.date}</p></a>
                    </div>
                  </div>
                </div>

              })}


            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default News;

