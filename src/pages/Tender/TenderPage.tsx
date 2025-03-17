import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetTendersListQuery } from '../../api/tender/tender.api';
import { TenderCard } from '../../components/TenderCard';

const TenderPage: FC = () => {
  const navigate = useNavigate();
  const { data: tenders, isLoading, error } = useGetTendersListQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600">Произошла ошибка при загрузке данных</div>
      </div>
    );
  }

  return (
    <div className="tender-page max-w-6xl mx-auto px-4 py-8 mt-[100px]">
      <h1 className="tender-page__title text-3xl font-bold text-blue-900 mb-8">
        ПРИГЛАШЕНИЕ К УЧАСТИЮ В ТОРГАХ
      </h1>

      <div className="tender-page__content grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tenders?.map((tender) => (
          <TenderCard
            key={tender.id}
            tender={tender}
            onClick={(id) => navigate(`/procurement/${id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TenderPage;