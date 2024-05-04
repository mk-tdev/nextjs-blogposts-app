import { Post } from "@/app-configs/app-types";
import { dummyPosts } from "@/app-configs/dummyData";
import PostGrid from "@/components/posts/post-grid";
import { getAllPostsData } from "@/lib/post-util";
import Head from "next/head";

export const getStaticProps = async () => {
  const allPosts = getAllPostsData();
  return {
    props: {
      allPosts,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};

const Posts = ({ allPosts }: { allPosts: Post[] }) => {
  return (
    <>
      <Head>
        <title>All Blog Posts</title>
        <meta name="description" content="Explore all my blog posts" />
      </Head>
      <section>
        <div className="container mx-auto py-10">
          <h2 className="text-2xl font-bold mb-5">All Blog Posts</h2>
          {/* Fetch and display all blog posts here */}

          <PostGrid posts={allPosts} />
        </div>
      </section>
    </>
  );
};

export default Posts;
