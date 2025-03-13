export interface BlogType {
  id: number;
  title: string;
  date: string;
  meta_data: {
    tags: string[];
  };
}
