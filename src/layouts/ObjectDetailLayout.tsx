import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import { MenuItem } from 'components/Home';

const ObjectDetailLayout: React.FC = () => {
  const menuData: MenuItem[] = [
    {
      id: 'about',
      label: 'О жилом комплексе',
      url: '#about',
      anchor: true
    },
    {
      id: 'floor-plans',
      label: 'Планировки',
      url: '#floor-plans',
      anchor: true
    },
    {
      id: 'gallery',
      label: 'Галерея',
      url: '#gallery',
      anchor: true
    },
    {
      id: 'features',
      label: 'Преимущества',
      url: '#features',
      anchor: true
    },
    {
      id: 'location',
      label: 'Локация',
      url: '#location',
      anchor: true
    },
    {
      id: 'video',
      label: 'Видео',
      url: '#video',
      anchor: true
    }
  ];
  return (
    <>
      <Header menuData={menuData} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ObjectDetailLayout;

