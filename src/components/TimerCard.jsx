function TimerCard({ classActivity, optionalClasses = "", children }) {
  return (
    <article className={`${classActivity} ${optionalClasses}`.trim()}>
      {children}
    </article>
  );
}

export default TimerCard;
