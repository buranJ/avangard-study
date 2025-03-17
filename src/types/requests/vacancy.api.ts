import { IVacancy } from '../common/vacancy';

export type IGetVacancyResponse = IVacancy;
export type IGetVacancyParams = void;

export interface ISubmitVacancyFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume: File;
}

export type ISubmitVacancyResponse = {
  success: boolean;
  message: string;
};