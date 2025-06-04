import styles from "./CardBackgroundGrey.module.scss";

function CardBackgroundGrey({ children, display }) {
  return (
    <article style={{ display: display }} className={styles.card}>
      {children}
    </article>
  );
}

export default CardBackgroundGrey;
