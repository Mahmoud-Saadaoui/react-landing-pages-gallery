import { Link } from "react-router-dom";
import { images } from "./images";
import { homeData } from "./data";

const Home = () => {
  const { welcome, targets, tickets, news, tasks, searchItems, uploads, lastProject, reminders, post, social, projectsTable } = homeData;

  return (
    <>
      <h1 className="p-relative">Dashboard</h1>
      <div className="wrapper d-grid gap-20">
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
          <div className="intro p-20 d-flex space-between bg-eee">
            <div>
              <h2 className="m-0">{welcome.title}</h2>
              <p className="c-grey mt-5">{welcome.subtitle}</p>
            </div>
            <img className="hide-mobile" src={welcome.introImg} alt="" />
          </div>
          <img src={welcome.avatar} alt="" className="avatar" />
          <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
            {welcome.stats.map((s) => (
              <div key={s.label}>
                {s.label}
                <span className="d-block c-grey fs-14 mt-10">{s.sub}</span>
              </div>
            ))}
          </div>
          <Link to="/landing-pages/dashboard/profile" className="visit d-block fs-14 bg-blue c-white w-fit btn-shape">
            Profile
          </Link>
        </div>

        <div className="quick-draft p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Quick Draft</h2>
          <p className="mt-0 mb-20 c-grey fs-15">Write A Draft For Your Ideas</p>
          <form>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="text" name="title" placeholder="Title" />
            <textarea className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" name="thought" placeholder="Your Thought" />
            <input className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape" type="submit" value="Save" />
          </form>
        </div>

        <div className="targets p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Yearly Targets</h2>
          <p className="mt-0 mb-20 c-grey fs-15">Targets Of The Year</p>
          {targets.map((t) => (
            <div className={`target-row mb-20 ${t.color} center-flex`} key={t.name}>
              <div className="icon center-flex">
                <i className={`${t.icon} fa-lg c-${t.color}`} />
              </div>
              <div className="details">
                <span className="fs-14 c-grey">{t.name}</span>
                <span className="d-block mt-5 mb-10 fw-bold">{t.value}</span>
                <div className="progress p-relative">
                  <span className={`bg-${t.color} ${t.color}`} style={{ width: t.percent }}>
                    <span className={`bg-${t.color}`}>{t.percent}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tickets p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Tickets Statistics</h2>
          <p className="mt-0 mb-20 c-grey fs-15">Everything About Support Tickets</p>
          <div className="d-flex txt-c gap-20 f-wrap">
            {tickets.map((t) => (
              <div className="box p-20 rad-10 fs-13 c-grey" key={t.label}>
                <i className={`${t.icon} fa-2x mb-10 ${t.color}`} />
                <span className="d-block c-black fw-bold fs-25 mb-5">{t.value}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
          <h2 className="mt-0 mb-20">Latest News</h2>
          {news.map((n) => (
            <div className="news-row d-flex align-center" key={n.title}>
              <img src={n.img} alt="" />
              <div className="info">
                <h3>{n.title}</h3>
                <p className="m-0 fs-14 c-grey">{n.desc}</p>
              </div>
              <div className="btn-shape bg-eee fs-13 label">{n.label}</div>
            </div>
          ))}
        </div>

        <div className="tasks p-20 bg-white rad-10">
          <h2 className="mt-0 mb-20">Latest Tasks</h2>
          {tasks.map((t) => (
            <div className={`task-row between-flex${t.done ? " done" : ""}`} key={t.title}>
              <div className="info">
                <h3 className="mt-0 mb-5 fs-15">{t.title}</h3>
                <p className="m-0 c-grey">{t.desc}</p>
              </div>
              <i className="fa-regular fa-trash-can delete" />
            </div>
          ))}
        </div>

        <div className="search-items p-20 bg-white rad-10">
          <h2 className="mt-0 mb-20">Top Search Items</h2>
          <div className="items-head d-flex space-between c-grey mb-10">
            <div>Keyword</div>
            <div>Search Count</div>
          </div>
          {searchItems.map((s) => (
            <div className="items d-flex space-between pt-15 pb-15" key={s.keyword}>
              <span>{s.keyword}</span>
              <span className="bg-eee fs-13 btn-shape">{s.count}</span>
            </div>
          ))}
        </div>

        <div className="latest-uploads p-20 bg-white rad-10">
          <h2 className="mt-0 mb-20">Latest Uploads</h2>
          <ul className="m-0">
            {uploads.map((u) => (
              <li className="between-flex pb-10 mb-10" key={u.name}>
                <div className="d-flex align-center">
                  <img className="mr-10" src={u.img} alt="" />
                  <div>
                    <span className="d-block">{u.name}</span>
                    <span className="fs-15 c-grey">{u.author}</span>
                  </div>
                </div>
                <div className="bg-eee btn-shape fs-13">{u.size}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="last-project p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-20">Last Project Progress</h2>
          <ul className="m-0 p-relative">
            {lastProject.map((p) => (
              <li className={`mt-25 d-flex align-center${p.state ? ` ${p.state}` : ""}`} key={p.label}>
                {p.label}
              </li>
            ))}
          </ul>
          <img className="launch-icon hide-mobile" src={images.projectPng} alt="" />
        </div>

        <div className="reminders p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-25">Reminders</h2>
          <ul className="m-0">
            {reminders.map((r) => (
              <li className="d-flex align-center mt-15" key={r.title}>
                <span className={`key bg-${r.color} mr-15 d-block rad-half`} />
                <div className={`pl-15 ${r.color}`}>
                  <p className="fs-14 fw-bold mt-0 mb-5">{r.title}</p>
                  <span className="fs-13 c-grey">{r.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="latest-post p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-25">Latest Post</h2>
          <div className="top d-flex align-center">
            <img className="avatar mr-15" src={images.avatar} alt="" />
            <div className="info">
              <span className="d-block mb-5 fw-bold">{post.name}</span>
              <span className="c-grey">{post.time}</span>
            </div>
          </div>
          <div className="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">{post.content}</div>
          <div className="post-stats between-flex c-grey">
            <div>
              <i className="fa-regular fa-heart" />
              <span> {post.likes}</span>
            </div>
            <div>
              <i className="fa-regular fa-comments" />
              <span> {post.comments}</span>
            </div>
          </div>
        </div>

        <div className="social-media p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-25">Social Media Stats</h2>
          {social.map((s) => (
            <div className={`box ${s.klass} p-15 p-relative mb-10 between-flex`} key={s.klass}>
              <i className={`${s.icon} fa-2x c-white h-full center-flex`} />
              <span>{s.text}</span>
              <a className="fs-13 c-white btn-shape" href="#">
                {s.action}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="projects p-20 bg-white rad-10 m-20">
        <h2 className="mt-0 mb-20">Projects</h2>
        <div className="responsive-table">
          <table className="fs-15 w-full">
            <thead>
              <tr>
                {["Name", "Finish Date", "Client", "Price", "Team", "Status"].map((h) => (
                  <td key={h}>{h}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {projectsTable.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.date}</td>
                  <td>{p.client}</td>
                  <td>{p.price}</td>
                  <td>
                    {p.team.map((t, i) => (
                      <img src={t} alt="" key={i} />
                    ))}
                  </td>
                  <td>
                    <span className={`label btn-shape ${p.statusClass} c-white`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;