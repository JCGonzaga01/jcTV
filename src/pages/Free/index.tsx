import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSlides, PageBanner } from "components";
import { fetchFreeTypeAsync } from "store/actions/free";
import { free } from "store/selectors/free";
import styles from "./Free.scss";

const Free: React.FC = () => {
  const dispatch = useDispatch();
  const { payload } = useSelector(free);

  useEffect(() => {
    dispatch(fetchFreeTypeAsync.request(undefined, undefined));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>{payload?.list && <PageBanner items={payload?.list} />}</div>
  );
};

export default Free;
