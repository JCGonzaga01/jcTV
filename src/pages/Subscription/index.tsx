import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSlides, PageBanner } from "components";
import { fetchSubscriptionTypeAsync } from "store/actions/subscription";
import { subscription } from "store/selectors/subscription";
import styles from "./Subscription.scss";

const Subscription: React.FC = () => {
  const dispatch = useDispatch();
  const { payload } = useSelector(subscription);

  useEffect(() => {
    dispatch(fetchSubscriptionTypeAsync.request(undefined, undefined));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>{payload?.list && <PageBanner items={payload?.list} />}</div>
  );
};

export default Subscription;
