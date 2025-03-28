import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import BitrixForm from "components/BitrixForm";
import BurgerMenu from "components/BurgerMenu";
import { Modal } from "components/Modal";

import Dropdown from "./Dropdown/Dropdown";
import { MenuItem } from "./Header.helpers";

import polygon from "../../assets/icons/Polygon 2.svg";
import logo from "../../assets/images/logo-blue.svg";

interface IProps {
  menuData: MenuItem[];
  consultationNumber?: number;
}

const Header: FC<IProps> = ({ menuData, consultationNumber }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg z-50 pb-[20px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4">

          <img src={logo} alt="Avangard" className="h-10" />


          <nav className="hidden md:flex gap-6">
            {menuData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center gap-1 text-[16px] font-medium"
              >
                {item.label}
                {item.hasDropdown && <img src={polygon} alt="dropdown" />}
              </a>
            ))}
          </nav>


          <button className="hidden md:block text-[16px] font-medium w-[131px] h-[38px] bg-white rounded-[20px] p-[5px]">
            Связаться
          </button>


          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>


        <div
          className={`${menuOpen ? "block" : "hidden"
            } md:hidden absolute top-full left-0 w-full bg-white shadow-lg`}
        >
          <nav className="flex flex-col items-center py-4">
            {menuData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="py-2 text-lg text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="w-full py-3 text-white font-medium">
            Связаться
          </button>
        </div>
      </div>
    </header>
  );
};


export default Header;