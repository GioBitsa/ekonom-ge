import React from "react";
import styles from "./Details.module.scss";
import { DetailsSectionData } from "@/data";

const Details = () => {
  return (
    <section id="features" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className="sectionHeader">Crafted for Comfort</h2>
        <div className={styles.content}>
          {DetailsSectionData.map((item) => (
            <div className={styles.content__item} key={item.id}>
              <div className={styles.content__item__image}>
                <img src={item.src} alt={item.title} />
              </div>
              <div className={styles.content__item__text}>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
