import { Post } from "@/app-configs/app-types";
import Banner from "@/components/home/banner";
import Featured from "@/components/home/featured";
import { getFeaturedPosts } from "@/lib/post-util";
import Head from "next/head";

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};

const HomePage = ({ featuredPosts }: { featuredPosts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Explore my latest blog posts" />
      </Head>
      <Banner />
      <Featured posts={featuredPosts} />
    </>
  );
};

export default HomePage;
