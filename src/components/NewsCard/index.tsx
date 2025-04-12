import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import icon from "../../assets/images/News/back.svg"
import { mockData, IRaport } from "./NewsData"
import "./styles.css"
import { Link } from 'react-router-dom';
import { NewsMock, IMock } from 'pages/NewsDetail';




interface IProps {
  imgSrc: string;
  title: string;
  date: string;
  slug: string;
}

const NewsCard: FC<IProps> = ({ imgSrc, title, date, slug }) => {
  const back = useNavigate()

  const [setVisible, setInVisible] = useState(false)
  const [isText, setIsText] = useState("Загрузить еще");
  {/* // const handle = () => {setIsText((e) => (e === "Загрузить еще" ? "Загрузка..." : "Результат"))} */ }

  return (



    <section className=" mt-0 "  >
      <div className="container mx-auto md:px-[76px] ">
        <div className="test__content  ">
          <div className="text flex   items-center ">
            <button onClick={() => back(-1)} >
              <img src={icon} className=" w-[15px] md:w-[23px]  " alt="iconic" />

            </button>
            <h2 className=" font-[700] w-[329px]  text-[24px] md:text-[50px] text-center md:w-[1240px] " >Новости</h2>
          </div>
          <div className="test__cards md:flex   md:flex-wrap md:justify-between  md:mt-[55px] md:gap-[39px]  ">

            {mockData.map((item: IRaport) => {
              const newsItem = NewsMock.find(news => news.id === item.id)


              return <div key={item.id} className="news__content mt-[15px] shadow-lg md:mt-0 flex items-center  md:flex-col  justify-between  md:max-w-[350px] bg-white p-[7px] md:p-[10px] rounded-[18px] md:rounded-[28px] " >
                {newsItem && (
                  <Link to={`/news-detail/${newsItem.slug}`} key={newsItem.id} className="" >
                    <div className="news__wrap md:relative flex items-center md:block md:w-[100%] ">
                      <div className="image md:w-[330px] h-[120px]  md:h-[240px] " >
                        <img src={item.image} alt="image" className=" w-[100%] object-cover rounded-[5%] h-[100%]" />
                      </div>
                      <div className=" max-w-[161px] ml-[15px] md:text-center  md:max-w-[307px] ">
                        <h2 className=" text-[19px] font-[500]  md:text-[25px] md:mt-[10px] " >{item.title}</h2>
                        <a href="#"><p className=" md:absolute md:top-[2%] md:right-[5%] md:text-[20px] mt-[5px]  font-[500] md:px-[70px]  text-[15px] px-[15px] py-[10px] bg-[#00091B] text-white rounded-[62px] max-w-[107px] flex items-center justify-center  " >{item.date}</p></a>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            })}

            {setVisible && (<div className="" onClick={() => setInVisible(false)}>  </div>)}

            {setVisible ? (

              <div>

                {mockData.map((item: IRaport) => {
                  return <div key={item.id} className="news__content mt-[15px] shadow-lg md:mt-0 flex items-center  md:flex-col  justify-between  md:max-w-[350px] bg-white p-[7px] md:p-[10px] rounded-[18px] md:rounded-[28px] " >
                    <div className="news__wrap md:relative flex items-center md:block md:w-[100%] ">
                      <div className="image md:w-[330px] h-[120px]  md:h-[240px] " >
                        <img src={item.image} alt="image" className=" w-[100%] object-cover h-[100%]" />
                      </div>
                      <div className=" max-w-[161px] ml-[15px] md:text-center  md:max-w-[307px] ">
                        <h2 className=" text-[19px] font-[500]  md:text-[30px] md:mt-[10px] " >{item.title}</h2>
                        <a href="#"><p className=" md:absolute md:top-[2%] md:right-[5%] md:text-[20px] mt-[5px]  font-[500] md:px-[70px]  text-[15px] px-[15px] py-[10px] bg-[#00091B] text-white rounded-[62px] max-w-[107px] flex items-center justify-center  " >{item.date}</p></a>
                      </div>
                    </div>
                  </div>
                })}
              </div>
            ) : ""
            }
            <div className=" mt-[30px] text-center  md:hidden " >


              <button
                className=" text-[20px] font-[500] text-white  px-[40px] py-[14px] bg-[#00417d] rounded-[30px] "
                onClick={() => setInVisible(!setVisible)}
              >

                {isText}

              </button>
            </div>

          </div>
        </div>
      </div>
    </section >
  )
};

export default NewsCard;

