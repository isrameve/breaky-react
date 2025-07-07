// import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./TopNavBar.module.scss";

const TopNavBar = ({ children }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoAndUserId}>
        <img src="" alt="logo-breaky" />
        <h3>User</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TopNavBar;
