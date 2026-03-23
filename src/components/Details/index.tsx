import React from "react";
import styles from "./Details.module.scss";
import { DetailsSectionData } from "@/data";
import { useTranslations } from "next-intl";

const Details = () => {
  const t = useTranslations();
  return (
    <section id="features" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className="sectionHeader">{t("details-title")}</h2>
        <div className={styles.content}>
          {DetailsSectionData.map((item) => (
            <div className={styles.content__item} key={item.id}>
              <div className={styles.content__item__image}>
                <img
                  src={item.src}
                  alt={t(`details-item-${item.id}-title`)}
                  title={t(`details-item-${item.id}-title`)}
                />
              </div>
              <div className={styles.content__item__text}>
                <h6>{t(`details-item-${item.id}-title`)}</h6>
                <p>{t(`details-item-${item.id}-desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
