import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

export type MenuItem = {
  id: string;
  label: string;
  url?: string;
  external?: boolean;
  anchor?: boolean;
  subMenu?: MenuItem[];
};

interface DropdownProps {
  items: MenuItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {


  return (
    <>
    </>
  );
};

export default Dropdown;

