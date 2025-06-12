import styles from "./FullCenterSection.module.scss";

function FullCenterSection({ children, position = "fullHeightCenter" }) {
  return <section className={styles[position]}>{children}</section>;
}

export default FullCenterSection;
