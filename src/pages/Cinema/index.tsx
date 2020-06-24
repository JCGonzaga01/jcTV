import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSlides, PageBanner } from "components";
import { fetchCinemaTypeAsync } from "store/actions/cinema";
import { cinema } from "store/selectors/cinema";
import styles from "./Cinema.scss";

const Cinema: React.FC = () => {
  const dispatch = useDispatch();
  const { payload } = useSelector(cinema);

  useEffect(() => {
    dispatch(fetchCinemaTypeAsync.request(undefined, undefined));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>{payload?.list && <PageBanner items={payload?.list} />}</div>
  );
};

export default Cinema;
