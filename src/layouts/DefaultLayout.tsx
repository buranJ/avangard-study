import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { useGet3dTourListQuery, useGetObjectsListQuery } from 'api/objects/objects.api';
import Header from 'components/Header';
import { MenuItem } from 'components/Home';

const DefaultLayout: React.FC = () => {
  const objectQuery = useGetObjectsListQuery();
  const toursQuery = useGet3dTourListQuery();

  const objectsSubMenuValues = useMemo(() => {
    return (
      objectQuery.data?.map((object) => ({ id: object.slug, label: object.title, url: `/object-detail/${object.slug}`, external: true })) ||
      []
    );
  }, [objectQuery.data]);

  const toursSubMenuValues = useMemo(() => {
    if (!toursQuery.data) return [];

    const objectsSubMenu = toursQuery.data
      .filter((tour) => tour.building != null)
      .map((tour) => ({
        id: `obj-${tour.id}`,
        label: tour.title,
        url: `/3d-tour/${tour.id}`,
        external: true
      }));

    const salesSubMenu = toursQuery.data
      .filter((tour) => tour.building == null)
      .map((tour) => ({
        id: `sales-${tour.id}`,
        label: tour.title,
        url: `/3d-tour/${tour.id}`,
        external: true
      }));

    return [
      {
        id: 'objectsTour',
        label: 'Тур по объектам',
        subMenu: objectsSubMenu
      },
      {
        id: 'sales',
        label: 'Отдел продаж',
        subMenu: salesSubMenu
      }
    ];
  }, [toursQuery.data]);

  const menuData: MenuItem[] = [
    {
      id: 'about',
      label: 'О нас',
      subMenu: [
        { id: 'about', label: 'О нас', url: '/about', anchor: false },
        { id: 'tech', label: 'Техническая база', url: '/technical-base', anchor: false },
        { id: 'projects', label: 'Реализованные проекты', url: '/completed-projects', anchor: false },
        { id: 'news', label: 'Новости', url: '/news', anchor: false },
        { id: 'video', label: 'Видео', url: 'https://www.youtube.com/c/AvangardStyleKGZ', anchor: false, external: true }
      ]
    },
    {
      id: 'objects',
      label: 'Объекты',
      subMenu: [
        ...objectsSubMenuValues,
        {
          id: 'construction-progress',
          label: 'Динамика строительства',
          url: '/construction-progress',
          anchor: false
        },
        {
          id: 'objects-all',
          label: 'Все объекты',
          url: '/all-objects',
          anchor: false
        }
      ]
    },
    { id: 'business', label: 'Бизнес центр', url: 'https://bc-avangard.kg/', external: true },
    { id: 'fitness', label: 'Фитнес клуб', url: 'https://avangardsport.kg/', external: true },
    { id: 'live', label: 'LIVE', url: 'https://live.avangardstyle.kg/', external: true },
    {
      id: '3dtour',
      label: '3D Тур',
      url: '/#',
      subMenu: toursSubMenuValues
    },
    { id: 'smi', label: 'СМИ', url: '/smi' },
    { id: 'contacts', label: 'Контакты', url: '/contacts', anchor: false }
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

export default DefaultLayout;

