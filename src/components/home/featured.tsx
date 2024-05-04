import PostGrid from "../posts/post-grid";
import { Post } from "@/app-configs/app-types";

const Featured = ({ posts = [] }: { posts?: Post[] }) => {
  return (
    <section>
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-5">Featured Posts</h2>

        <PostGrid posts={posts} />
      </div>
    </section>
  );
};

export default Featured;
