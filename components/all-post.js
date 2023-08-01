import { Fragment } from "react";
import PostGrid from "../posts/post-grid";
import classes from "./all-post.module.css";

const AllPost = (props) => {
  return (
    <div className={classes.items}>
      <h1 className={classes.title}>All Posts</h1>
      <PostGrid posts={props.posts} />
    </div>
  );
};

export default AllPost;
