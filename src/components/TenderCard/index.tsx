import { FC } from 'react';
import { ITender } from '../../types/common/tender';
import './styles.scss';

interface TenderCardProps {
  tender: ITender;
  onClick?: () => void;
}

export const TenderCard: FC<TenderCardProps> = ({ tender, onClick }) => {
  return (
    <div className="tender-card" onClick={onClick}>
      <div className="tender-card__content">
        <h3 className="tender-card__title">{tender.title}</h3>
        <div className="tender-card__info">
          <p className="tender-card__location">{tender.place}</p>
          <p className="tender-card__date">{tender.created_at}</p>
        </div>
      </div>
    </div>
  );
};
