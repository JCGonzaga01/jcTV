import React from "react";
import { classNames } from "helpers/functions";
import styles from "./SignIn.scss";

const SignIn: React.FC = () => {
  const handleOnClickSignIn = () => alert("Signed-in successfully!");
  return (
    <div className={classNames(styles.wrapper, styles.itemShowing)}>
      <div className={styles.container}>
        <div>
          <div>Email:</div>
          <input type={"text"} />
        </div>
        <div>
          <div>Password:</div>
          <input type={"password"} />
        </div>
        <div>
          <div className={styles.btnStyle} onClick={handleOnClickSignIn}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
