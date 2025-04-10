export interface BlogType {
  id: number;
  title: string;
  slug: string;
  date: string;
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
