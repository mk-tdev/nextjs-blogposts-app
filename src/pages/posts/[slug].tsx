import { Post } from "@/app-configs/app-types";
import PostDetail from "@/components/posts/post-details";
import { getPostData, getPostsFiles } from "@/lib/post-util";

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const { params } = context;

  const selectedPost = getPostData(params.slug);

  return {
    props: {
      selectedPost,
    },
    revalidate: 600, // Revalidate the page every 60 seconds
  };
};

export const getStaticPaths = async () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  if (!slugs || slugs.length === 0) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // show 404 page if path not found
  };

  // return {
  //   paths: [],
  //   fallback: "blocking", // wait until page is generated
  // };
};

const PostDetails = ({ selectedPost }: { selectedPost: Post }) => {
  return <PostDetail post={selectedPost} />;
};

export default PostDetails;
