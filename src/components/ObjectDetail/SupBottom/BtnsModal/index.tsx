import { useEffect, useMemo, useState } from "react";
import "./style.scss";

import calendar from "../../../../assets/icons/calendar.svg"
import arrow from "../../../../assets/icons/arrowBack.svg"

interface ConstructionData {
  id: number;
  month: number;
  year: number;
  images: { image: string }[];
}

interface Props {
  info: ConstructionData[] | undefined;
}

const BtnsModal = ({ info }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const selected = useMemo(() => info[selectedDateIndex], [info, selectedDateIndex]);
  const formattedDates = useMemo(() => {
    const months = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    return info.map(item => `${months[item.month - 1]} ${item.year}`);
  }, [info]);
  console.log(formattedDates);
  

  return (
    <div className="BtnsModal__wrapper">
      <div className="BtnsModal__content">
        <div className="BtnsModal__top">
          <img src={selected.images[0].image} alt="Main Construction" />
        </div>
        <div className="BtnsModal__bot">
          <h2 className="BtnsModal__title">Ход строительства</h2>
          <div className="BtnsModal__bot-wrap">
            <div onClick={() => setOpen(!open)} className="BtnsModal__form">
              <div className="BtnsModal__form-wrap">
                <div className="BtnsModal__form-wrapper">
                  <img src={calendar} alt="calendar" className="BtnsModal__form-icon" />
                  <label className="BtnsModal__form-label">
                    {formattedDates[selectedDateIndex]}
                  </label>
                </div>
                <button className="BtnsModal__form-btn">
                  <img src={arrow} alt="arrow" />
                </button>
              </div>

              <div className={`BtnsModal__form-accardion ${!open ? "hidden" : "block"}`}>
                {formattedDates.map((label, index) => (
                  <div
                    key={info[index].id}
                    className="BtnsModal__form-accardion-wrapper"
                    onClick={() => {
                      setSelectedDateIndex(index);
                      setOpen(false);
                    }}
                  >
                    <input
                      type="radio"
                      name="date"
                      checked={index === selectedDateIndex}
                      readOnly
                    />
                    <label>{label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="BtnsModal__slider">
            {selected.images.map((imgObj, idx) => (
              <img key={idx} src={imgObj.image} alt={`construction-${idx}`} />
            ))}
          </div>

          <div className="BtnsModal__bot-btn-wrap">
            <button className="BtnsModal__btn">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnsModal;
