const Section = ({ id, className, open, onClose, children }) => (
  <div className="wrapper" onClick={onClose}>
    <section
      id={id}
      className={`${className} target${open ? " change" : ""}`}
    >
      {children}
    </section>
  </div>
);

export default Section;