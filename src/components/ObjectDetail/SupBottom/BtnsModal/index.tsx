import { useEffect, useState } from "react";

import arrow from "../../../../assets/icons/arrowBack.svg";
import calendar from "../../../../assets/icons/calendar.svg";
import i1 from "../../../../assets/images/constructionProgress/image-1.png";
import i2 from "../../../../assets/images/constructionProgress/image-2.png";
import i3 from "../../../../assets/images/constructionProgress/image-3.png";
import i4 from "../../../../assets/images/constructionProgress/image-4.png";
import i5 from "../../../../assets/images/constructionProgress/image-4.png";
import i6 from "../../../../assets/images/constructionProgress/image-4.png";

import "./style.scss";

const images = [i2, i3, i4, i5, i6];
const date = [
  "Ноябрь 2023",
  "Декабрь 2023",
  "Январь 2024",
  "Февраль 2024",
  "Март 2024",
  "Апрель 2024",
  "Май 2024",
  "Июнь 2024",
];

const BtnsModal = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log(open);
  }, [open])
  return (
    <>
      <div className="BtnsModal__wrapper">
        <div className="BtnsModal__content">
          <div className="BtnsModal__top">
            <img src={i1} alt="i1" />
          </div>
          <div className="BtnsModal__bot">
            <h2 className="BtnsModal__title">Ход строительства</h2>
            <div className="BtnsModal__bot-wrap">
              <div onClick={() => open ? setOpen(false) : setOpen(true)} className="BtnsModal__form ">
                <div className="BtnsModal__form-wrap">
                  <div className="BtnsModal__form-wrapper">
                    <img
                      src={calendar}
                      alt="calendar"
                      className="BtnsModal__form-icon"
                    />
                    <label htmlFor="date" className="BtnsModal__form-label">
                      {date[date.length - 1]}
                    </label>
                  </div>

                  <button className="BtnsModal__form-btn">
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
                <div
                  className={`BtnsModal__form-accardion ${open == false ? "hidden" : "block"}`}
                >
                  
                  {date.map((item) => (
                    <div className="BtnsModal__form-accardion-wrapper">
                      <input type="radio" name="date" />
                      <label htmlFor="date">{item}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="BtnsModal__slider">
              {images.map((item) => (
                <img src={item} alt="process image" />
              ))}
            </div>
            <div className="BtnsModal__bot-btn-wrap">
              <button className="BtnsModal__btn">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnsModal;
