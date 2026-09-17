import { stats } from "./data";

const Stats = () => (
  <div className="stats">
    <div className="container">
      {stats.map((item) => (
        <div className="box" key={item.label}>
          <i className={item.icon}></i>
          <div className="number">{item.number}</div>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;