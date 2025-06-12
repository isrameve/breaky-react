import styles from "./CardBackgroundGrey.module.scss";

function CardBackgroundGrey({ children, display, typeAlign = "card" }) {
  return (
    <article style={{ display: display }} className={styles[typeAlign]}>
      {children}
    </article>
  );
}

export default CardBackgroundGrey;
