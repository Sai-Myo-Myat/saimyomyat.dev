export interface BlogType {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: string;
  description?: string;
  content: string;
  file?: string;
  meta_data: {
    tags: string[];
  };
}

export interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}
