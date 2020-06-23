import React, { useState, useEffect } from "react";
import { CategoryType } from "HomeType";
import { classNames } from "helpers/functions";
import { Tag } from "components";
import styles from "./ItemDetails.scss";

type Props = {
  payload: CategoryType;
  onClose: () => void;
};

const ItemDetails: React.FC<Props> = ({ payload, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isTrailerPlay, setIsTrailerPlay] = useState(false);

  useEffect(() => {
    setIsTrailerPlay(false);
    setIsClosing(false);
  }, [payload]);

  const onCloseDetails = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const onHandleTrailerVideo = () => setIsTrailerPlay(!isTrailerPlay);

  return (
    <div className={classNames(styles.wrapper, isClosing && styles.closing)}>
      <div className={styles.itemDescription}>
        <img className={styles.title} src={payload.titleUrl} alt={payload.title} />
        <div className={styles.itemHeader}>
          <span className={styles.match}>{payload.match}</span>
          <span className={styles.yearDuration}>{payload.year}</span>
          <span className={styles.grade}>{payload.grade}</span>
          <span className={styles.yearDuration}>{payload.duration}</span>
        </div>
        <div className={styles.summary}>{payload.summary}</div>
        <button className={styles.playBtn}>Play</button>
        <div className={styles.starring}>
          Starring: <span>{payload.starring.join(", ")}</span>
        </div>
        <div className={styles.availableTo}>
          Available to:
          {payload.tags.map((item, index) => (
            <Tag key={index}>{item}</Tag>
          ))}
        </div>
      </div>
      <div className={styles.itemTrailer}>
        {isTrailerPlay && (
          <video width="100%" height="100%" autoPlay={isTrailerPlay} onEnded={onHandleTrailerVideo}>
            <source src={payload.trailerUrl} type="video/mp4" />
            Browser does not support video tag
          </video>
        )}
        <div className={classNames(styles.trailerPoster, isTrailerPlay && styles.closing)}>
          <img className={styles.trailerPoster} src={payload.trailerPoster} alt={payload.title} />
          <div className={styles.playBtn} onClick={onHandleTrailerVideo}>
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
      </div>
      <div className={styles.closeDetails} onClick={onCloseDetails}>
        <svg viewBox={"0 0 40 40"}>
          <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </div>
    </div>
  );
};

export default ItemDetails;
