type Office = {
  name: string;
  description: string;
};

type Requisite = {
  title: string;
  description: string;
};

type HomeAddress = {
  link: string;
  title: string;
};

type Address = {
  id: number;
  title: string;
  value: string;
  link: string;
  contacts: number;
};

type Social = {
  id: number;
  title: string;
  svg: string;
  link: string;
  contacts: number;
};

export type ICompanyData = {
  id: number;
  sales_offices: Office[];
  som_requisites: Requisite[];
  dollar_requisites: Requisite[];
  home_addresses: HomeAddress[];
  address: Address[];
  socials: Social[];
  title: string;
  inn: string;
  okpo: string;
};

export interface ITechnicalBase {
  title: string;
  description: string;
  youtube_url: string;
  images: {
    image: string
  }[];
}

