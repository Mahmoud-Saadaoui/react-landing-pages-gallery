import { coursesData } from "./data";

const Courses = () => (
  <>
    <h1 className="p-relative">Courses</h1>
    <div className="courses-page d-grid m-20 gap-20">
      {coursesData.map((c, i) => (
        <div className="course bg-white rad-6 p-relative" key={`${c.title}-${i}`}>
          <img className="cover" src={c.cover} alt="" />
          <img className="instructor" src={c.instructor} alt="" />
          <div className="p-20">
            <h4 className="m-0">{c.title}</h4>
            <p className="description c-grey mt-15 fs-14">{c.desc}</p>
          </div>
          <div className="info p-15 p-relative between-flex">
            <span className="title bg-blue c-white btn-shape">Course Info</span>
            <span className="c-grey">
              <i className="fa-regular fa-user" /> {c.users}
            </span>
            <span className="c-grey">
              <i className="fa-solid fa-dollar-sign" /> {c.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Courses;