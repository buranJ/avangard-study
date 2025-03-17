import { IPaginationMeta } from 'types/common/pagination';
import { ITender, ITenderDetail } from 'types/common';


export type IGetTendersListResponse = ITender[];
export type IGetTendersListParams = void;


export interface IGetTendersListPaginatedResponse extends IPaginationMeta {
  results: ITender[];
}
export type IGetTendersListPaginatedParams = {
  page?: number;
  limit?: number;
};


export type IGetTenderDetailResponse = ITenderDetail;
export type IGetTenderDetailParams = {
  id: string;
};