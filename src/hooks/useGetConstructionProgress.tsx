import { useEffect, useState } from 'react';

import { useGetObjectsListQuery, useLazyGetConstructionProgressQuery } from 'api/objects/objects.api';
import { IConstructionProgress } from 'types/common';

export interface IProgressData {
  progress: IConstructionProgress[];
  title: string;
  building_id: string;
}

interface ActivePeriod {
  month: number;
  year: number;
}

export interface ImagePagination {
  activePeriods: Record<string, ActivePeriod>;
  visibleImages: Record<string, number>;
  isLoading: Record<string, boolean>;
  handleLoadMore: (projectTitle: string) => void;
  handleMonthChange: (projectTitle: string, month: number, year: number) => void;
  IMAGES_PER_LOAD: number;
}

const IMAGES_PER_LOAD = 8;

export const useGetConstructionProgress = (): {
  data: IProgressData[];
  isLoading: boolean;
  pagination: ImagePagination;
} => {
  const [getConstructionProgress] = useLazyGetConstructionProgressQuery();
  const { data: objectsData } = useGetObjectsListQuery();
  const [result, setResult] = useState<IProgressData[]>([]);
  const [loading, setLoading] = useState(false);
  const [activePeriods, setActivePeriods] = useState<Record<string, ActivePeriod>>({});
  const [visibleImages, setVisibleImages] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let isMounted = true;

    const getItems = async () => {
      setLoading(true);
      if (!objectsData?.length) {
        setLoading(false);
        return;
      }

      const progressData = await Promise.all(
        objectsData.map(async (obj) => {
          const progress = await getConstructionProgress({ building_id: obj.info.building }).unwrap();
          return {
            progress,
            building_id: obj.info.building,
            title: obj.title
          };
        })
      );

      if (isMounted) {
        const initialActivePeriods: Record<string, ActivePeriod> = {};
        progressData.forEach((project) => {
          if (project.progress[0]) {
            initialActivePeriods[project.title] = {
              month: project.progress[0].month,
              year: project.progress[0].year
            };
          }
        });

        setActivePeriods(initialActivePeriods);
        setResult(progressData);
        setLoading(false);
      }
    };

    getItems();

    return () => {
      isMounted = false;
    };
  }, [objectsData, getConstructionProgress]);

  const handleLoadMore = (projectTitle: string) => {
    setVisibleImages((prev) => ({
      ...prev,
      [projectTitle]: (prev[projectTitle] || IMAGES_PER_LOAD) + IMAGES_PER_LOAD
    }));
  };

  const handleMonthChange = (projectTitle: string, month: number, year: number) => {
    setIsLoading((prev) => ({ ...prev, [projectTitle]: true }));

    setActivePeriods((prev) => ({
      ...prev,
      [projectTitle]: { month, year }
    }));
    setVisibleImages((prev) => ({ ...prev, [projectTitle]: IMAGES_PER_LOAD }));

    setTimeout(() => {
      setIsLoading((prev) => ({ ...prev, [projectTitle]: false }));
    }, 1500);
  };

  return {
    data: result,
    isLoading: loading,
    pagination: {
      activePeriods,
      visibleImages,
      isLoading,
      handleLoadMore,
      handleMonthChange,
      IMAGES_PER_LOAD
    }
  };
};

