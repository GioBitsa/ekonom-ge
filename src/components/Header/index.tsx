"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import useIsMobile from "@/hooks/useIsMobile";
import clsx from "clsx";
import { startTransition, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { menuItems } from "@/data";

const Header = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
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

  const handleChangeLanguage = async (lang: "ka" | "en") => {
    startTransition(() => {
      const segments = pathname.split("/");

      // pathname: /en/home → ['', 'en', 'home']
      segments[1] = lang;

      const newPath = segments.join("/");

      router.replace(newPath);
    });
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
          <img
            src="/icons/logo.jpeg"
            alt="logo"
            width={100}
            height={30}
            title="Ekonom.ge"
          />
          <p>EKONOM.GE</p>
        </div>

        <ul className={styles.list} data-active={isMenuOpen}>
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => handleScroll(item.id)}>
              {t(item.name)}
            </li>
          ))}
          <div
            className={clsx(styles.list__close, "icon")}
            onClick={handleToggleMenu}
          >
            <img src="/icons/close.svg" alt="close" title="close" />
          </div>
        </ul>
        <div className={styles.wrapper__right}>
          <div
            className="locale"
            onClick={() => handleChangeLanguage(locale === "ka" ? "en" : "ka")}
          >
            {locale === "ka" ? (
              <img src="/icons/en.svg" alt="english" />
            ) : (
              <img src="/icons/ka.svg" alt="georgian" />
            )}
          </div>

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
              <img src="/icons/burger-menu.svg" alt="menu" title="menu" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
