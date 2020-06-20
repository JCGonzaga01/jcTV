import React from "react";
import Header from "_root/Header";
import styles from "./App.scss";

const App: React.FC = (props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default App;
