import Image from "next/image";
import styles from "./Hero.module.scss";
import { HeroSectionData } from "@/data";

export default function Hero() {
  return (
    <section id="home" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1>The Perfect Wooden Chair</h1>
          <p>Elegant design meets ultimate comfort</p>

          <div className={styles.price}>$199</div>

          <button className={styles.cta}>Shop Now</button>

          <div className={styles.badges}>
            <span>🚚 Free Delivery</span>
            <span>🛡 Warranty</span>
            <span>↩ 30-Day Returns</span>
          </div>
        </div>

        <div className={styles.image}>
          <img
            src={HeroSectionData.src}
            alt={HeroSectionData.name}
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
