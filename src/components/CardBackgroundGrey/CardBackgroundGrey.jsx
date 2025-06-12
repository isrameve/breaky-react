import styles from "./CardBackgroundGrey.module.scss";

function CardBackgroundGrey({ children, typeAlign = "card" }) {
  return <article className={styles[typeAlign]}>{children}</article>;
}

export default CardBackgroundGrey;
