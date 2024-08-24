import { BlogType } from "@/types/blogs";
import Tag from "../base/Tag";
import ClickableH3 from "../base/clickable-h3";

interface Props {
  blog: BlogType;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <div className="border border-dashed px-4 py-2 rounded-lg border-gray-500">
      <div className="flex flex-col-reverse">
        <ClickableH3>{blog.title}</ClickableH3>
        <p className="text-muted-foreground italic text-xs">{blog.date}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => {
          return <Tag key={tag} text={tag} />;
        })}
      </div>
    </div>
  );
};

export default BlogCard;
