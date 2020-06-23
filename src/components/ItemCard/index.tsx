import React, { useState } from "react";
import { classNames } from "helpers/functions";
import { Tag } from "components";
import { CategoryType } from "HomeType";
import styles from "./ItemCard.scss";

type Props = {
  payload: CategoryType;
  isSelected?: boolean;
  onViewDetails?: (id: string) => void;
};

const ItemCard: React.FC<Props> = ({ payload, isSelected = false, onViewDetails = () => {} }) => {
  const [isOut, setIsOut] = useState(true);
  const [isRendered, setIsRendered] = useState(false);

  const hanldeOnMouseEnter = () => {
    setIsRendered(true);
    setIsOut(false);
  };

  const handleOnMouseLeave = () => setIsOut(true);

  const inlineStyles = {
    backgroundImage: `url(${payload?.bannerUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    border: `2px solid ${isSelected ? "white" : "black"}`,
  };

  const handleOnClickViewDetials = () => onViewDetails(payload?.id);

  return (
    <div
      style={inlineStyles}
      className={styles.wrapper}
      onMouseEnter={hanldeOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {isRendered && (
        <div className={classNames(styles.container, (!isOut || isSelected) && styles.containerBG)}>
          <div
            className={classNames(
              styles.cardDetails,
              isOut && !isSelected ? styles.detailsNotShow : styles.detailsShow
            )}
          >
            <div className={classNames(styles.playBtnContainer, isSelected && styles.playBtnShow)}>
              <div className={styles.playBtn}>
                <svg viewBox={"0 0 27 27"}>
                  <polygon
                    className={styles.polygon}
                    points={"9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"}
                  />
                  <path
                    className={styles.pathSvg}
                    d={
                      "M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"
                    }
                  />
                </svg>
              </div>
            </div>
            <div
              className={classNames(styles.detailsContainer, isSelected && styles.detailsNotShow)}
            >
              <div className={styles.movieTitle}>{payload?.title}</div>
              <div>{payload?.duration}</div>
              <div className={styles.tags}>
                {payload?.tags?.map((item, index) => (
                  <Tag key={`${index}-${item}`}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
          <div
            className={classNames(
              styles.viewDetailsContainer,
              isOut && !isSelected ? styles.detailsNotShow : styles.detailsShow,
              isSelected && styles.showDetails,
              !isSelected && styles.cursorPointer
            )}
            onClick={handleOnClickViewDetials}
          >
            <div className={styles.viewDetails}>
              <svg viewBox={"0 0 40 15"}>
                <path
                  className={!isSelected ? styles.arrowPath : ""}
                  d={"M 0 0 L 18 10 L 36 0 L 33 0 L 18 8 L 3 0 L 0 0"}
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
