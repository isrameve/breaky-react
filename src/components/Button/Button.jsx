import styles from "./Button.module.scss";

const Button = ({ label, onClick, typeOfButton = "primaryButton" }) => {
  return (
    <button className={styles[typeOfButton]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
