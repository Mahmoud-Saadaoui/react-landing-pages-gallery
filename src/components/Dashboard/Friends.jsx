import { friendsData } from "./data";

const Friends = () => (
  <>
    <h1 className="p-relative">Friends</h1>
    <div className="friends-page d-grid m-20 gap-20">
      {friendsData.map((f) => (
        <div className="friend bg-white rad-6 p-20 p-relative" key={f.name}>
          <div className="contact">
            <i className="fa-solid fa-phone" />
            <i className="fa-regular fa-envelope" />
          </div>
          <div className="txt-c">
            <img className="rad-half mt-10 mb-10 w-100 h-100" src={f.img} alt="" />
            <h4 className="m-0">{f.name}</h4>
            <p className="c-grey fs-13 mt-5 mb-0">{f.job}</p>
          </div>
          <div className="icons fs-14 p-relative">
            <div className="mb-10">
              <i className="fa-regular fa-face-smile fa-fw" />
              <span>{f.friends} Friend</span>
            </div>
            <div className="mb-10">
              <i className="fa-solid fa-code-commit fa-fw" />
              <span>{f.projects} Projects</span>
            </div>
            <div>
              <i className="fa-regular fa-newspaper fa-fw" />
              <span>{f.articles} Articles</span>
            </div>
            {f.vip && <span className="vip fw-bold c-orange">VIP</span>}
          </div>
          <div className="info between-flex fs-13">
            <span className="c-grey">Joined {f.joined}</span>
            <div>
              <a className="bg-blue c-white btn-shape" href="#">
                Profile
              </a>
              <a className="bg-red c-white btn-shape" href="#">
                Remove
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Friends;