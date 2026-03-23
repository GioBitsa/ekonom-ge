import Image from "next/image";
import styles from "./Hero.module.scss";
import { HeroSectionData } from "@/data";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();
  return (
    <section id="home" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1>{t("hero-title")}</h1>

          <p>{t("hero-desc")}</p>

          <div className={styles.price}>{t("hero-price")}</div>

          <button className={styles.cta}>{t("hero-button")}</button>

          <div className={styles.badges}>
            <span>🚚 {t("hero-feature-1")}</span>
            <span>🛡 {t("hero-feature-2")}</span>
            <span>↩ {t("hero-feature-3")}</span>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src={HeroSectionData.src}
            title={HeroSectionData.name}
            alt={t("hero-title")}
            width={400}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
