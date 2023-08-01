import { Fragment, useEffect } from "react";
import Hero from "../components/hero";
import FeaturedPosts from "../components/featured-post";
// import { getAllPosts, getfeaturedPosts } from "../lib/posts-util";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.post} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "blogPosts");

  function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
  }

  function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postData = {
      slug: postSlug,
      ...data,
      content,
    };

    return postData;
  }

  function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map((postFile) => {
      return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) =>
      postA.date > postB.date ? -1 : 1
    );

    return sortedPosts;
  }

  function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
  }
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      post: featuredPosts,
    },
  };
}

export default HomePage;
