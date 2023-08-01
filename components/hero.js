import { Fragment } from "react";
import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/user.png"
          alt="an image showing user"
          width={300}
          height={300}
        />
      </div>
      <div>
        {/* <div className={classes.title}>Hi</div> */}
        <p className={classes.desc}>
          I blog about web development - especially frontend frameworks like
          React or Next.
        </p>
      </div>
    </section>
  );
};

export default Hero;
