import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSlides, PageBanner } from "components";
import { fetchHomeTypeAsync } from "store/actions/home";
import { home } from "store/selectors/home";
import styles from "./Home.scss";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { payload } = useSelector(home);

  useEffect(() => {
    dispatch(fetchHomeTypeAsync.request(undefined, undefined));
  }, [dispatch]);

  return (
    <>
      <PageBanner />
      {payload?.categoryList?.map((category) => {
        return (
          <>
            <div className={styles.categoryTitle}>{category.title}</div>
            <ItemSlides key={category.id} items={category.list} />
          </>
        );
      })}
    </>
  );
};

export default Home;
