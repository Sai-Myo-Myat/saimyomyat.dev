import { BlogType } from "@/types/blogs";
import Tag from "../base/Tag";
import ClickableH3 from "../base/clickable-h3";

interface Props {
  blog: BlogType;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <div className="border border-dashed px-4 py-2 rounded-lg">
      <div className="flex flex-col">
        <p className="text-muted-foreground italic text-xs">{blog.date}</p>
        <ClickableH3 className="my-2 font-semibold">{blog.title}</ClickableH3>
      </div>
      {blog.tags && (
        <div className="flex flex-wrap gap-2 my-2">
          {blog.tags.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BlogCard;
