import React, { useRef, useEffect, useState } from "react";
import { ItemCard, ItemDetails } from "components";
import { CategoryType } from "HomeType";
import styles from "./ItemSlides.scss";

type Props = {
  items: Array<CategoryType>;
};

const ItemSlides: React.FC<Props> = ({ items }) => {
  const isClient = typeof window === "object";
  const itemRef = useRef();
  const [itemWidth, setItemWidth] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [itemDetails, setItemDetails] = useState<CategoryType>({} as CategoryType);
  const [itemsData, setItemsData] = useState<Array<CategoryType>>(items);
  const [itemPerView, setItemPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (!isClient) {
        return false;
      }
      const screenWidth = isClient ? window.innerWidth : 0;
      const itemRefDetails = itemRef.current || { clientWidth: screenWidth };
      const itemPerView = screenWidth < 730 ? 3 : screenWidth < 1140 && screenWidth >= 730 ? 4 : 5;
      const newItemWidth = itemRefDetails.clientWidth / itemPerView;
      setItemPerView(itemPerView);
      setItemWidth(newItemWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onViewDetails = (id: string) => {
    setSelectedItemId(id);
    const selectedItem = itemsData.filter((item) => item.id === id)[0];
    setItemDetails(selectedItem);
  };

  const onCloseDetails = () => {
    setSelectedItemId("");
    setItemDetails({} as CategoryType);
  };

  const onHandleLeftArrow = () => {
    const tmpItems = [...itemsData];
    tmpItems.splice(itemsData.length - 1, 1);
    tmpItems.splice(0, 0, itemsData[itemsData.length - 1]);
    setItemsData(tmpItems);
  };

  const onHandleRightArrow = () => {
    const tmpItems = [...itemsData];
    tmpItems.splice(0, 1);
    tmpItems.splice(itemsData.length - 1, 0, itemsData[0]);
    setItemsData(tmpItems);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemCarouselContainer}>
        {itemsData.length > itemPerView ? (
          <div className={styles.btnContainer} onClick={onHandleLeftArrow}>
            <div className={styles.arrowBtn}>
              <svg viewBox={"0 0 15 23"}>
                <path
                  className={styles.pathBtn}
                  d={"M 0 0 L 0 0 M 0 11 L 8 0 L 8 3 L 2 11 L 8 18 L 8 21 L 0 11"}
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className={styles.noArrow} />
        )}
        <div ref={itemRef} className={styles.itemsContainer}>
          {itemsData.length &&
            itemsData.map((item) => {
              return (
                <div key={item.id} style={{ minWidth: `${itemWidth}px` }}>
                  <ItemCard
                    payload={item}
                    onViewDetails={onViewDetails}
                    isSelected={selectedItemId === item.id}
                  />
                </div>
              );
            })}
        </div>
        {itemsData.length > itemPerView && (
          <div className={styles.btnContainer} onClick={onHandleRightArrow}>
            <div className={styles.arrowBtn}>
              <svg viewBox={"0 0 15 23"}>
                <path
                  className={styles.pathBtn}
                  d={"M 8 11 L 0 0 L 0 3 L 6 11 L 0 18 L 0 21 L 8 11"}
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      {Object.keys(itemDetails).length !== 0 && (
        <ItemDetails payload={itemDetails} onClose={onCloseDetails} />
      )}
    </div>
  );
};

export default ItemSlides;
