import { useState } from "react";
import Button from "../Button/Button";

import styles from "./PopUpNotification.module.scss";

const PopUpNotification = ({ title, message }) => {
  const [display, setDisplay] = useState("block");

  const handleHideCard = () => {
    setDisplay("none");
  };

  return (
    <>
      <div style={{ display: display }} className={styles.card}>
        <h2>{title}</h2>
        <p>{message}</p>
        {/* OnClick crear un evento para ocultar la ventana */}
        <Button label={"OK"} onClick={handleHideCard} />
      </div>
    </>
  );
};

export default PopUpNotification;
