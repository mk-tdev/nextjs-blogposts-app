import { Post } from "@/app-configs/app-types";
import PostItem from "./post-item";

const PostGrid = ({ posts = [] }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        return <PostItem key={post.slug} {...post} />;
      })}
    </div>
  );
};

export default PostGrid;
