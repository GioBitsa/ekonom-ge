"use client";

import React from "react";
import styles from "./Footer.module.scss";
import { menuItems } from "@/data";

const Footer = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/icons/logo.jpg" alt="logo" />
          <p>RODA</p>
        </div>
        <div className={styles.content}>
          <div className={styles.content__column}>
            <div className={styles.content__inline}>
              <img src="/icons/phone.svg" alt="phone" />
              <p>+123456789</p>
            </div>
            <div className={styles.content__inline}>
              <img src="/icons/pin.svg" alt="pin" />
              <p>123 Sireet Name, Cy, State,</p>
            </div>
          </div>
          <ul className={styles.content__list}>
            {menuItems.map((item) => (
              <li key={item.id} onClick={() => handleScroll(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} RODA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
