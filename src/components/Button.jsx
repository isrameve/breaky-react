function Button({ className = "", id, label }) {
  return (
    <button className={className} id={id} type="button">
      {label}
    </button>
  );
}

export default Button;
