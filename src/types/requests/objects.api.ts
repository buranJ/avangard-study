import { IPaginationMeta } from 'types/common/pagination';
import {
  AvangardComplexData,
  IConstructionProgress,
  IObject3DTour,
  IObjectFinished,
  IObjectsFinishedList,
  IObjectsList,
  IObjectsListHome
} from 'types/common';

export type IGetObjectsResponse = AvangardComplexData;
export type IGetObjectsParams = { slug: string };

export type IGetConstructionProgressResponse = IConstructionProgress[];
export type IGetConstructionProgressParams = { building_id: string };

export type IGetObjectsDetailFinishedResponse = IObjectFinished;
export type IGetObjectsDetailFinishedParams = { slug: string };

export type IGetObjectsListResponse = IObjectsList[];
export type IGetObjectsListParams = void;

export interface IGetObjectsFinishedListResponse extends IPaginationMeta {
  results: IObjectsFinishedList[];
}
export type IGetObjectsFinishedListParams = { category_id: number; page?: number; limit?: number };

export type IGetObjectsListHome = IObjectsListHome[];
export type IGetObjectsListHomeParams = void;

export type IGet3DTourResponse = IObject3DTour;
export type IGet3DTourParams = { id: string };

export type IGet3DTourListResponse = IObject3DTour[];
export type IGet3DTourListParams = void;
