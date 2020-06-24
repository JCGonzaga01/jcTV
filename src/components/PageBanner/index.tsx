import React, { useState, useRef, useEffect } from "react";
import { CategoryType } from "HomeType";
import { ItemDetails, ItemSlides } from "components";
import styles from "./PageBanner.scss";

type Props = {
  items: Array<CategoryType>;
};

const PageBanner: React.FC<Props> = ({ items }) => {
  const [itemDetails, setItemDetails] = useState<CategoryType>(items[0]);
  const [newDetails, setNewDetails] = useState(false);

  const handleOnViewDetails = (id: string) => {
    const newBannerDetails: CategoryType = items.filter((item) => item.id === id)[0];
    setItemDetails(newBannerDetails);
    setNewDetails(true);
    setTimeout(() => {
      setNewDetails(false);
    }, 500);
  };

  const handleOnClickPlayBtn = () => window.open("https://waitforit.rakuten.tv/", "_blank");

  return (
    <div className={styles.wrapper}>
      <div className={newDetails ? styles.itemShowing : ""}>
        <ItemDetails
          payload={itemDetails}
          hasCloseBtn={false}
          onClickPlayBtn={handleOnClickPlayBtn}
        />
      </div>
      <div className={styles.categoryTitle}>Top new Releases</div>
      <ItemSlides
        items={items}
        isCardOnly
        preSelectedId={items[0].id}
        onViewDetailBanner={handleOnViewDetails}
      />
    </div>
  );
};

export default PageBanner;
