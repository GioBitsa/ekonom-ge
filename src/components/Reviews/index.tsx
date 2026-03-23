"use client";

import styles from "./Reviews.module.scss";
import { ReviewsSectionData } from "@/data";
import Stars from "../common/Stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { truncateText } from "@/utils/truncateText";

const Reviews = () => {
  return (
    <section id="reviews" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className="sectionHeader">Customer Reviews</h2>
        <p className="sectionDescription">What our customers are saying</p>

        <div className={styles.content}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={3}
            spaceBetween={40}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {ReviewsSectionData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.content__item}>
                  <div className={styles.content__item__user}>
                    <img
                      src={item.src}
                      alt={item.name}
                      className={styles.content__item__user__image}
                    />
                    <div className={styles.content__item__user__info}>
                      <p>{truncateText(item.name, 20)}</p>
                      <Stars rate={item.rate} />
                    </div>
                  </div>
                  <div className={styles.content__item__desc}>
                    {truncateText(item.desc, 150)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
