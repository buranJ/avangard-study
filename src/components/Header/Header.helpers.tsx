export type MenuItem = {
  id: string;
  label: string;
  url?: string;
  external?: boolean;
  anchor?: boolean;
  subMenu?: MenuItem[];
};

