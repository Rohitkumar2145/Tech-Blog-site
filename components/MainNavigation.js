import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <div className={classes.nav}>
      <div>
        <Link className={classes.logo} href="/">
          Tech Blog
        </Link>
      </div>
      <div className={classes.subnav}>
        <Link className={classes.options} href="/posts">
          Posts
        </Link>
        <Link className={classes.options} href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MainNavigation;
