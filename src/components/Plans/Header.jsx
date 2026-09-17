import { headerPlans } from "./data";

const Header = () => (
  <div className="header text-center">
    <div className="overlay">
      <div className="container">
        <h1>Choose Your Plan</h1>
        {headerPlans.map((plan) => (
          <div className="plan float-left" key={plan}>
            {plan}
          </div>
        ))}
        <div className="clearfix"></div>
        <div className="order hidden-xs">Order Now and Get Another Plan For Free</div>
      </div>
    </div>
  </div>
);

export default Header;