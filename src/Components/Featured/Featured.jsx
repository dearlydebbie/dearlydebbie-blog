import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Tech Explorer!</b> Welcome to DearlyDebbie's Digital Playground.
        🚀
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Unleash Your Inner Geek: Join Me on a Journey Through the Digital
            Wonderland
          </h1>
          <p className={styles.postDesc}>
            Welcome to my blog, where we're diving headfirst into the
            captivating world of technology, all while having a blast! <br />
            Whether you're a seasoned coder, a casual gadget lover, or just
            someone curious about what's happening in the tech universe, this
            blog is your go-to destination for everything digital. <br /> I'm
            Debbie, your friendly guide on this journey, and I can't wait to
            share my tech stories and creative ideas with you. So, grab your
            virtual passport, fasten your seatbelts, and let's embark on this
            thrilling adventure through the <b>Digital Wonderland</b>! 🌐💡
          </p>
          <button className={styles.button}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
