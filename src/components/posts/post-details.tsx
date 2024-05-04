import Image from "next/image";
import PostItem from "./post-item";
import { Post } from "@/app-configs/app-types";

const PostDetail = ({ post }: { post: Post }) => {
  return <PostItem {...post} asFullPage />;
};

export default PostDetail;
