// import Skeleton from 'react-loading-skeleton';
import ReactPlayer from 'react-player';
// import { HashNavigation, Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useGetNewsDetailQuery } from 'api/news/news.api';
// import PageHeading from 'components/PageHeading';


import { useNavigate, useParams } from 'react-router-dom';
import icon from "../../assets/images/News/back.svg"
import './styles.scss';
import { IMock, NewsMock } from './index.ts';





const NewsDetail: React.FC = () => {
  const back = useNavigate()
  const { slug } = useParams()
  const newsItem = NewsMock.find((item) => item.slug === slug)
  const isVideo = newsItem?.link.includes("https://youtu.be") || newsItem?.link.includes("youtube")
  if (!newsItem) return <div className=' text-[44px] mt-[80px] text-center font-[700] text-[#1b1b1b] ' >Novost' ne naideno</div>
  // console.log(newsItem);
  // console.log("NewsMock:", NewsMock, newsItem);
  // console.log(newsItem.link);

  return (
    <>
      <section className='detail mt-[10px] ' >
        <div className="container">
          <div className="detail__content">

            <div className="detail__header flex   items-center ">
              <button onClick={() => back(-1)} >
                <img src={icon} className=" w-[15px] md:w-[23px]  " alt="iconic" />

              </button>
              <h2 className=" font-[700] w-[329px]  text-[24px] md:text-[50px] text-center md:w-[1240px] " >Новости AVANGARD STYLE
              </h2>
            </div>

            <div className="detail__body" key={newsItem.id} >
              <div className="detail__text mt-[10px] ">
                <h2 className=' font-[700] text-[34px] text-center ' >{newsItem.title}</h2>
              </div>

              <div className='detail__link   ' >
                {isVideo ? (

                  <iframe
                    width="100%"
                    className=' w-[361px] h-[202px] md:w-[1284px] md:h-[721px] '
                    src={newsItem.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                ) : (
                  <img src={newsItem.link} alt="" />
                )}
              </div>
              <div className="detail__about mt-20 max-w  ">
                <p className=' text-[20px] font-[300] leading-[200%] ' >{newsItem.text}</p>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );




  // return (
  //   <>

  //   </>
  // );
};

export default NewsDetail;

