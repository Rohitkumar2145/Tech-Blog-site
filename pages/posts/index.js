import AllPost from "../../components/all-post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// const DUMMY_DATA = [
//   {
//     slug: "getting-started-with-nextjs1",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.jpg",
//     date: "12 july 2022",
//     excerpt:
//       "NextJS is a the reactJs for production with extra features like server side rendering, page based routing and api routes.",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.jpg",
//     date: "12 july 2022",
//     excerpt:
//       "NextJS is a the reactJs for production with extra features like server side rendering, page based routing and api routes.",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.jpg",
//     date: "12 july 2022",
//     excerpt:
//       "NextJS is a the reactJs for production with extra features like server side rendering, page based routing and api routes.",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.jpg",
//     date: "12 july 2022",
//     excerpt:
//       "NextJS is a the reactJs for production with extra features like server side rendering, page based routing and api routes.",
//   },
// ];

const AllPostsPage = (props) => {
  return <AllPost posts={props.post} />;
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
  const allPosts = getAllPosts();
  return {
    props: {
      post: allPosts,
    },
  };
}
export default AllPostsPage;
