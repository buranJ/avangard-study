import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./Header.helpers";
import Dropdown from "./Dropdown/Dropdown";

import polygon from "../../assets/icons/Polygon 2.svg";
import logo from "../../assets/images/logo-blue.svg";


interface IProps {
  menuData: MenuItem[];
  consultationNumber?: number;
}

const Header: FC<IProps> = ({ menuData, consultationNumber }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<{ [key: string]: boolean }>({});
  const [openNestedSubmenus, setOpenNestedSubmenus] = useState<{ [key: string]: boolean }>({});
  const [isModalOpen, setIsModalOpen] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 600);
  };

  const toggleMobileSubmenu = (id: string) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleNestedSubmenu = (id: string) => {
    setOpenNestedSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg z-50 pb-[20px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4">
          <img src={logo} alt="Avangard" className="h-10" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {menuData.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.url || "#"}
                  className="flex items-center gap-1 text-[16px] font-medium"
                >
                  {item.label}
                  {item.subMenu && (
                    <img src={polygon} alt="dropdown" className="w-2.5 h-2.5 mt-[2px]" />
                  )}
                </Link>

                {item.subMenu && activeDropdown === item.id && (
                  <Dropdown
                    items={item.subMenu}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    onMouseLeave={handleMouseLeave}
                  />
                )}
              </div>
            ))}
          </nav>

          <button className="hidden md:block text-[16px] font-medium w-[131px] h-[38px] bg-white rounded-[20px] p-[5px]"
            onClick={() => setIsModalOpen(true)}
          >
            Связаться
          </button>


          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>


        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md shadow-md p-4 space-y-2 z-40">
            {menuData.map((item) => (
              <div key={item.id}>
                <div
                  className="flex justify-between items-center text-black font-medium py-1 cursor-pointer"
                  onClick={() => {
                    if (item.subMenu) toggleMobileSubmenu(item.id);
                  }}
                >
                  <Link to={item.url || "#"}>{item.label}</Link>
                  {item.subMenu && <span>{openMobileSubmenus[item.id] ? "▲" : "▼"}</span>}
                </div>

                {item.subMenu && openMobileSubmenus[item.id] && (
                  <div className="pl-4">
                    {item.subMenu.map((subItem) => (
                      <div key={subItem.id}>
                        <div
                          className="flex justify-between items-center text-gray-700 text-sm py-1 cursor-pointer"
                          onClick={() => {
                            if (subItem.subMenu) toggleNestedSubmenu(subItem.id);
                          }}
                        >
                          <Link to={subItem.url || "#"}>{subItem.label}</Link>
                          {subItem.subMenu && (
                            <span>{openNestedSubmenus[subItem.id] ? "▲" : "▼"}</span>
                          )}
                        </div>

                        {subItem.subMenu && openNestedSubmenus[subItem.id] && (
                          <div className="pl-4">
                            {subItem.subMenu.map((nested) => (
                              <Link
                                key={nested.id}
                                to={nested.url || "#"}
                                className="block text-gray-500 py-1 text-sm"
                              >
                                {nested.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] absolute top-[130px] ">
            <button className="absolute top-2 right-2 text-2xl" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Мы перезвоним вам</h2>
            <p className="text-sm text-gray-600 mb-4">Оставьте ваши данные,наш специалист свяжется с Вами в ближайшее время.</p>
            <input type="text" placeholder="Имя" className="w-full border border-gray-300 p-2 mb-4 rounded" />
            <input type="tel" placeholder="Телефон" className="w-full border border-gray-300 p-2 mb-4 rounded" />
            <button className="w-full bg-black text-white py-2 rounded">Отправить</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
