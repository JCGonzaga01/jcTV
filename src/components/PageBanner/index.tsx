import React from "react";
import styles from "./PageBanner.scss";
import ItemCard from "components/ItemCard";

const PageBanner: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.bannerContainer}
        style={{
          backgroundImage: `url(
          https://occ-0-3187-3188.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaZXwQ3ryX1K106kYxgFJ3eW_fRFWaEkgd9T6N0U6Uu2KU-hmjQKwWH9ajW-p6t0HOD7gAX_XwvnATLF2uGcCfMr1mhA.webp?r=156
        )`,
        }}
      >
        <div className={styles.titleContainer}>
          <img
            className={styles.title}
            src={
              "https://occ-0-3187-3188.1.nflxso.net/dnm/api/v6/H8D6qtacWfxpwORI6dw3sYdASQc/AAAABRID6EIzZ2hpRgWWT-z-JHihrsB7uan3PhH6xcBS8UWzioEgHKk2v1v-vVIHFpKFVbP1HOopNcUM6pKaBHXMK_fuyv9E-WVqSg.webp?r=fa6"
            }
            alt={"Edge of Tomorrow"}
          />
          <div>
            <span>2014</span>
            <span>1h 53m</span>
            <span>G</span>
          </div>
          <div>
            Bill Cage is stuck in a time loop, reliving the day he died in battle -- unless he can
            find a way to not only survive, but defeat the alien invaders.
          </div>
        </div>
      </div>
      <div className={styles.topNewReleaseContainer}>
        <div>Top new release</div>
        <div className={styles.cardList}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
