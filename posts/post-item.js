import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.item}>
      <Link legacyBehavior href={`/posts/${slug}`}>
        <a>
          <div>
            <Image
              src={`/images/posts/${image}`}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
              className={classes.image}
            />
          </div>
          <div className={classes.text}>
            <h3>{title}</h3>
            <time>{formattedData}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
