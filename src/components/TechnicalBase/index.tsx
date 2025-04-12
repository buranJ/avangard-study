import { useGetTechnicalBaseQuery } from 'api/contact/contact.api';
import Gallery from 'components/Gallery';
import Mansory from 'components/Masonry';
import PageHeading from 'components/PageHeading';
import mockTechnicalBase from "./mocType"
import './styles.scss';
import Item from 'components/Home/OngoingProjects/Item';

const TechnicalBasePage = () => {
  const { data } = useGetTechnicalBaseQuery()
  const imageOfTech: { image: string, description?: string }[] = [
  ];
  data?.images.forEach ((item)=>{
    imageOfTech.push(item)
  })

  const fixedSizes = [
    { width: 456, height: 456 },
    { width: 648, height: 364 },
    { width: 460, height: 272 },
    { width: 312, height: 364 },
    { width: 312, height: 364 }
  ];

  const imagesType = [];

  for (let index = 0; index < imageOfTech.length; index++) {
    const { width, height } = fixedSizes[index % fixedSizes.length];

    imagesType.push(
      <img
        key={index}
        src={imageOfTech[index]}
        alt={`Tech ${index + 1}`}
        width={width}
        height={height}
        className="object-cover"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    )
  }

  return (
    <>
      <section className="technica">
        <div className="container mx-auto">
          <div className="tech__content">
            <div className="title">
              <h2 className="font-bold text-[24px] leading-[110%] text-center text-[#00091b] md:text-[50px]">
                {data?.title}
              </h2>
              <div className="tech__body flex flex-col gap-y-[10px] m-auto">
                <p className="font-normal mt-[29px] text-center text-[15px] max-w-[1200px] text-[#00091b] md:text-[20px]">
                  <div className='' dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
                </p>
                <div className="tech__you-tube mt-[30px] md:mt-[90px]">
                  <iframe className="w-full h-full aspect-video"
                    src={data?.youtube_url}
                    title="Youube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                  <li className="text-end list-none">
                    Видео 2019 года</li>
                </div>
                <Gallery imgsSrc={imageOfTech} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export default TechnicalBasePage;




