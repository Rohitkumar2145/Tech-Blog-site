import PostContent from "../../posts/post-detail/post-content";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PostDetailPage = (props) => {
  return <PostContent data={props.post} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), "blogPosts");

  function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
  }

  function getPostData(postIdentifier) {
    // console.log(postIdentifier);
    const postSlug = postIdentifier;
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

  const allPosts = getPostData(slug);
  return {
    props: {
      post: allPosts,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default PostDetailPage;
