import styles from "./FullCenterSection.module.scss";

function FullCenterSection({ children }) {
  return <section className={styles.fullHeightCenter}>{children}</section>;
}

export default FullCenterSection;
