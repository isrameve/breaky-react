import { useState } from "react";
import Button from "../Button/Button";

import styles from "./PopUpNotification.module.scss";

const PopUpNotification = ({ title, message, onClick }) => {
  return (
    <>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{message}</p>
        {/* OnClick crear un evento para ocultar la ventana */}
        <Button label={"OK"} onClick={onClick} />
      </div>
    </>
  );
};

export default PopUpNotification;
