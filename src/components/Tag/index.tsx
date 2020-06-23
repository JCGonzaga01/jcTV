import React from "react";
import styles from './Tag.scss';

const Tag: React.FC = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Tag;
