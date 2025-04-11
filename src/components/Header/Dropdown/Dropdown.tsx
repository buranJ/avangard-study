import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../Header.helpers";

interface DropdownProps {
  items: MenuItem[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onMouseEnter, onMouseLeave }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div
      className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md z-50 w-56 py-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link
            to={item.url || "#"}
            className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
          >
            {item.label}
          </Link>

          {item.subMenu && hoveredItem === item.id && (
            <div className="absolute left-full top-0 mt-2 ml-0 bg-white shadow-md rounded-md z-50 w-74 py-2">
              {item.subMenu.map((subItem) => (
                <Link
                  key={subItem.id}
                  to={subItem.url || "#"}
                  className="block px-4 py-2  hover:bg-gray-100 whitespace-nowrap break-words"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
