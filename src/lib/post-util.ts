import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/app-configs/app-types";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export const getPostData = (postIdentifier: string) => {
  const slug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug,
    ...data,
    content: content,
  };

  return postData;
};

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAllPostsData = () => {
  const fileNames = getPostsFiles();
  const allPosts = fileNames.map((fileName) => {
    return getPostData(fileName);
  });

  console.log({ allPosts });
  return allPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPostsData() as Post[];
  return allPosts.filter((post) => post.isFeatured);
};
