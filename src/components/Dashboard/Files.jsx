import { filesData } from "./data";

const Files = () => (
  <>
    <h1 className="p-relative">Files</h1>
    <div className="files-page d-flex m-20 gap-20">
      <div className="files-stats p-20 bg-white rad-10">
        <h2 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
        {filesData.stats.map((s) => (
          <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13" key={s.name}>
            <i className={`${s.icon} fa-lg ${s.color} center-flex c-${s.color} icon`} />
            <div className="info">
              <span>{s.name}</span>
              <span className="c-grey d-block mt-5">{s.count}</span>
            </div>
            <div className="size c-grey">{s.size}</div>
          </div>
        ))}
        <a className="upload bg-blue c-white fs-13 rad-6 d-block w-fit" href="#">
          <i className="fa-solid fa-angles-up mr-10" />
          Upload
        </a>
      </div>
      <div className="files-content d-grid gap-20">
        {filesData.files.map(([img, name, author, date, size], i) => (
          <div className="file bg-white p-10 rad-10" key={`${name}-${i}`}>
            <i className="fa-solid fa-download c-grey p-absolute" />
            <div className="icon txt-c">
              <img className="mt-15 mb-15" src={img} alt="" />
            </div>
            <div className="txt-c mb-10 fs-14">{name}</div>
            <p className="c-grey fs-13">{author}</p>
            <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
              <span>{date}</span>
              <span>{size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Files;