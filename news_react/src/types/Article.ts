export interface Article {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches?: Launch[];
  events?: Events[];
}

export interface Author {
  name: string;
  socials: null;
}

export interface Launch {
  launch_id: string;
  provider: string;
}

export interface Events {
  event_id: string;
  provider: string;
}
