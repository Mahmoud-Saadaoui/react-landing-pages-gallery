const Spinner = () => (
  <div className="spinner-container">
    <div className="circles">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} />
      ))}
    </div>
  </div>
);

export default Spinner;
