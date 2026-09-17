import { FaShoppingCart } from "react-icons/fa";
import { plans } from "./data";

export default function Prices() {
  return (
    <section className="prices">
      <div className="title text-center">
        <h3>خطط الاسعار</h3>
      </div>
      <div className="container">
        <div className="row">
          {[0, 2].map((start) => (
            <div className="col-lg" key={start}>
              <div className="row">
                {plans.slice(start, start + 2).map((plan, i) => (
                  <div className="col-sm" key={i}>
                    <div className={`plan text-center${plan.popular ? " popular" : ""}`}>
                      <p>{plan.name}</p>
                      <h3>
                        {plan.price}
                        <span>ريال</span>
                      </h3>
                      <ul className="list-unstyled">
                        {plan.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                      <button type="button" className="btn">
                        <FaShoppingCart aria-hidden="true" />
                        اطلب الآن
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}