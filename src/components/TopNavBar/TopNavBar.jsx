import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./TopNavBar.module.scss";

const TopNavBar = ({ children }) => {
  const initialUserConfig = {
    name: "",
    age: undefined,
    workTime: undefined,
    breakTime: undefined,
  };

  const [userProfile] = useLocalStorage("userProfile", initialUserConfig);

  return (
    <div className={styles.navBar}>
      <div className={styles.logoAndUserId}>
        <img src="any" alt="logo-breaky" />
        <h3>Hola{" " + userProfile.name || ""}!!</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TopNavBar;
