export interface ILinkNews {
  title: string;
  url: string;
  image: string;
  created_at: string;
}

export interface INews {
  main_image: string;
  slug: string;
  title: string;
  created_at: string;
}

export interface INewsDetail {
  title: string;
  description: string;
  youtube_link: string | null;
  main_image: string | null;
  slug: string;
  news_images: { image: string }[];
  created_at: string;
}

export interface INewsParams {
  limit?: number;
  page?: number;
}

