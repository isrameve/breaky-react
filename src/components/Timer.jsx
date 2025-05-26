function Timer({ className, id, timerUp }) {
  return (
    <div className={className}>
      <h2 id={id}>00:00</h2>
      <h3>{timerUp}</h3>
    </div>
  );
}

export default Timer;
