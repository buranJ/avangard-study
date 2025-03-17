export interface IPaginationMeta {
  links: {
    next: string | null;
    previous: string | null;
  };
  total: number;
  page: number;
  limit: number;
}

