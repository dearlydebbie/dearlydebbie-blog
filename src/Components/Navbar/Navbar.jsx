import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  return (
  <div className={styles.container}>
    <div className={styles.social}>
      <Image src="/facebook.png" alt="facebook" width={24} height={24} />
      <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
      <Image src="/youtube.png" alt="youtube" width={24} height={24} />
    </div>
    <div className={styles.logo}>DearlyDebbie</div>
    <div className={styles.links}>
      <ThemeToggle />
      <Link href="/">Homepage</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
      <AuthLinks />
    </div>
  </div>
  )
};

export default Navbar