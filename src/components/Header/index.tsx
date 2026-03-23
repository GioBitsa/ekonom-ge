"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import useIsMobile from "@/hooks/useIsMobile";
import clsx from "clsx";
import { useState } from "react";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "Features", id: "features" },
  { name: "Reviews", id: "reviews" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const isMobile = useIsMobile(1023);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      if (isMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.wrapper__logo}
          onClick={() => handleScroll("home")}
        >
          <img src="/icons/logo.jpg" alt="logo" width={100} height={30} />
          <p>RODA</p>
        </div>

        <ul className={styles.list} data-active={isMenuOpen}>
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => handleScroll(item.id)}>
              {item.name}
            </li>
          ))}
          <div
            className={clsx(styles.list__close, "icon")}
            onClick={handleToggleMenu}
          >
            <img src="/icons/close.svg" alt="close" />
          </div>
        </ul>
        <div className={styles.wrapper__right}>
          <div className="icon">
            <a
              // href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
          </div>
          {isMobile && (
            <div
              className={styles.wrapper__menuIcon}
              onClick={handleToggleMenu}
            >
              <img src="/icons/burger-menu.svg" alt="menu" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
