import { FC } from "react";

import "./styles.scss";

interface IName {
  name: string;
}

export const ObjectHeroModal: FC<IName> = ({ name }) => {
  return (
    <>
      <div className="objectHero__modal-wrapper">
        <div className="objectHero__modal-content">
          <h2 className="objectHero__modal-title">{name}</h2>
          <p className="objectHero__modal-description">
            Оставьте ваши данные,наш специалист свяжется с Вами в ближайшее
            время.
          </p>
          <div className="objectHero__modal-top-line"></div>
          <div className="objectHero__modal-fields">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <div className="ObjectHero__modal-field mt-2 mb-[5px]">
                  <input
                    name="name"
                    type="string"
                    placeholder="Имя"
                    required
                    autoComplete="given-name"
                  />
                </div>
              </div>
              <div>
                <div className="ObjectHero__modal-field mt-2">
                  <input
                    id="tel"
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    required
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="ObjectHero__modal-submit ">
                  Отправить
                </button>
              </div>
              <div className="objectHero__modal-bot-line"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
