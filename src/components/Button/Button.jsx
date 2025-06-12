import styles from "./Button.module.scss";

const Button = ({ label, onClick, typeOfButton = "primaryButton", type }) => {
  return (
    <button type={type} className={styles[typeOfButton]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
