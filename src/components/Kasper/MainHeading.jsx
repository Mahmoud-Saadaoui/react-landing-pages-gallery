const MainHeading = ({ title, text }) => (
  <div className="main-heading">
    <h2>{title}</h2>
    <p>
      {text ??
        "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."}
    </p>
  </div>
);

export default MainHeading;