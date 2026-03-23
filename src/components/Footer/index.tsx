"use client";

import { useTranslations } from "next-intl";
import styles from "./Footer.module.scss";
import { menuItems } from "@/data";

const Footer = () => {
  const t = useTranslations();
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
          <img src="/icons/logo.jpeg" alt="logo" title="Ekonom.ge" />
          <p>EKONOM.GE</p>
        </div>
        <div className={styles.content}>
          <div className={styles.content__column}>
            <div className={styles.content__inline}>
              <img src="/icons/phone.svg" alt="phone" title="phone" />
              <p>+123456789</p>
            </div>
            <div className={styles.content__inline}>
              <img src="/icons/pin.svg" alt="pin" title="pin" />
              <p>123 {t("address-tbilisi-georgia")}</p>
            </div>
          </div>
          <ul className={styles.content__list}>
            {menuItems.map((item) => (
              <li key={item.id} onClick={() => handleScroll(item.id)}>
                {t(item.name)}
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} EKONOM.GE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
