import Image from "next/image";
import classes from "./post-header.module.css";

const PostHeader = (props) => {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <div>
        <h1 className={classes.title}>{title}</h1>
      </div>
      <div>
        <Image
          className={classes.image}
          src={image}
          alt={"Post Image"}
          width={200}
          height={150}
        />
      </div>
    </header>
  );
};

export default PostHeader;
