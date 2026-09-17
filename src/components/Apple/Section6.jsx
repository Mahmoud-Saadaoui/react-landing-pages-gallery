import { footerIcons } from "./data";

const Section6 = () => (
  <section className="section-6 center">
    <div className="section-6-icons">
      {footerIcons.map(({ href, img, label }) => (
        <a href={href} className="icon-link" key={label}>
          <img src={img} alt={label} />
        </a>
      ))}
    </div>
    <p className="copyright">Copyright &copy; CodeAndCreate All Rights Reserved</p>
  </section>
);

export default Section6;