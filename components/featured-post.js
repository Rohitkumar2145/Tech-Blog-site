import PostGrid from "../posts/post-grid";
import classes from "./featured-post.module.css";

const FeaturedPosts = (props) => {
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>Featured Posts</h1>
      <PostGrid posts={props.posts} />
    </div>
  );
};

export default FeaturedPosts;
