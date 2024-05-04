import { Post } from "@/app-configs/app-types";
import Banner from "@/components/home/banner";
import Featured from "@/components/home/featured";
import { getFeaturedPosts } from "@/lib/post-util";

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
    <div>
      <Banner />
      <Featured posts={featuredPosts} />
    </div>
  );
};

export default HomePage;
