import { plansData } from "./data";

const Plans = () => (
  <>
    <h1 className="p-relative">Plans</h1>
    <div className="plans-page d-grid m-20 gap-20">
      {plansData.map((plan) => (
        <div className={`plan ${plan.color} bg-white p-20`} key={plan.name}>
          <div className={`top bg-${plan.color} txt-c p-20`}>
            <h2 className="m-0 c-white">{plan.name}</h2>
            <div className="price c-white">
              <span>$</span>
              {plan.price}
            </div>
          </div>
          <ul className="m-0">
            {plan.features.map((f) => (
              <li key={f.label}>
                {f.yes ? (
                  <i className="fa-solid fa-check fa-fw yes" />
                ) : (
                  <i className="fa-solid fa-xmark fa-fw" />
                )}
                <span>{f.label}</span>
                <i className="fa-solid fa-circle-info help" />
              </li>
            ))}
          </ul>
          {plan.current ? (
            <p className="c-grey m-0 txt-c">This Is Your Current Plan</p>
          ) : (
            <a href="#" className={`btn-shape bg-${plan.color} c-white d-block w-fit`}>
              Join
            </a>
          )}
        </div>
      ))}
    </div>
  </>
);

export default Plans;