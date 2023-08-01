import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <article className={classes.content}>
      <PostHeader image={`/images/posts/${data.image}`} title={data.title} />
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
