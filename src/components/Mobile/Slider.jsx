import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { sliderImages } from "./data";

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % sliderImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="slider" id="slider">
      <div className="container">
        <div className="title text-center">
          <h3>شاهد التطبيق بالتفصيل</h3>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {sliderImages.map((_, i) => (
              <li
                key={i}
                data-slide-to={i}
                className={index === i ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {sliderImages.map((img, i) => (
              <div key={i} className={`carousel-item${index === i ? " active" : ""}`}>
                <img className="d-block img-fluid" src={img} alt={`app-img ${i + 1} slide`} />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i - 1 + sliderImages.length) % sliderImages.length);
            }}
          >
            <span className="fa fa-angle-left fa-2x" aria-hidden="true">
              <FaAngleLeft style={{ fontSize: 28 }} />
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + 1) % sliderImages.length);
            }}
          >
            <span className="fa fa-angle-right fa-2x" aria-hidden="true">
              <FaAngleRight style={{ fontSize: 28 }} />
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;