import { IPaginationMeta } from 'types/common/pagination';
import { ILinkNews, INews, INewsDetail, INewsParams } from 'types/common';

export interface IGetNewsResponse extends IPaginationMeta {
  results: INews[];
}

export type IGetNewsParams = INewsParams;

export interface IGetNewsLinkResponse extends IPaginationMeta {
  results: ILinkNews[];
}

export type IGetNewsLinkParams = INewsParams;

export type IGetNewsDetailResponse = INewsDetail;

export type IGetNewsDetailParams = {
  slug: string;
};

