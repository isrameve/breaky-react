function ContainerCenter({ className, id, children }) {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}

export default ContainerCenter;
