import React, { useState } from "react";
import { classNames } from "helpers/functions";
import styles from "./Settings.scss";

const Settings: React.FC = () => {
  const [isOnPersonalisedSettings, setIsOnPersonalisedSettings] = useState(false);

  const handleOnClickPersonSet = () => setIsOnPersonalisedSettings(!isOnPersonalisedSettings);

  const handleResetAdId = () => alert("Advertising ID reset!");

  return (
    <div className={classNames(styles.wrapper, styles.itemShowing)}>
      <div className={styles.container}>
        <div>Privacy settings</div>
        <div>
          <div className={styles.settings}>
            <div className={styles.title}>Personalized experience</div>
            <div className={styles.settingsBtn} onClick={handleOnClickPersonSet}>{`Turn ${
              isOnPersonalisedSettings ? "on" : "off"
            } personalised experience`}</div>
            <div className={styles.info}>
              By allowing a personalised experience you consent to share your data with partners to
              enable us to serve you targeted ads.
            </div>
          </div>
          <div className={styles.settings}>
            <div className={styles.title}>Advertising ID</div>
            <div className={styles.settingsBtn} onClick={handleResetAdId}>
              Reset advertising ID
            </div>
            <div className={styles.info}>
              By resetting your adverising ID you are deleting all historical data we collected to
              provide you with a personalised experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
