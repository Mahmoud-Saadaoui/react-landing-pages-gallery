import { Link } from "react-router-dom";
import { images } from "./images";
import { homeData } from "./data";
import { FaRegTrashCan, FaRegHeart, FaRegComments } from "react-icons/fa6";

const COLORS = {
  blue: "#0075ff",
  orange: "#f59e0b",
  green: "#22c55e",
  red: "#f44336",
};

const SOCIAL = {
  twitter: { box: "rgba(29,161,242,.2)", color: "#1da1f2" },
  facebook: { box: "rgba(24,119,242,.2)", color: "#1da1f2" },
  youtube: { box: "rgba(255,0,0,.2)", color: "#ff0000" },
  linkedin: { box: "rgba(0,119,181,.2)", color: "#0077b5" },
};

const card = "rounded-[10px] bg-white p-[20px]";
const cardTitle = "mt-0 mb-[10px] text-[1.5em] font-bold";
const cardDesc = "mt-0 mb-[20px] text-[15px] text-[#888]";

const Home = () => {
  const { welcome, targets, tickets, news, tasks, searchItems, uploads, lastProject, reminders, post, social, projectsTable } = homeData;

  return (
    <>
      <h1 className="relative mx-[20px] my-[20px] mb-[40px] text-[2em] font-bold">
        Dashboard
        <span aria-hidden className="absolute -bottom-[10px] left-0 h-[3px] w-[120px] bg-white" />
        <span aria-hidden className="absolute -bottom-[10px] left-0 h-[3px] w-[40px] bg-black" />
      </h1>
      <div className="mx-[20px] mb-[20px] grid gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(450px,1fr))] max-md:mx-[10px] max-md:gap-[10px] max-md:[grid-template-columns:minmax(200px,1fr)]">
        <div className="overflow-hidden rounded-[10px] bg-white max-md:text-center">
          <div className="flex items-center justify-between bg-[#eee] p-[20px] max-md:pb-[30px]">
            <div className="max-md:w-full">
              <h2 className="mt-0 mb-0 text-[1.5em] font-bold">{welcome.title}</h2>
              <p className="mt-[5px] mb-0 text-[#888]">{welcome.subtitle}</p>
            </div>
            <img className="mb-[-10px] w-[200px] max-md:hidden" src={welcome.introImg} alt="" />
          </div>
          <img
            className="ml-[20px] mt-[-32px] block h-[64px] w-[64px] rounded-full border-2 border-white p-[2px] shadow-[0_0_5px_#ddd] max-md:ml-0"
            src={welcome.avatar}
            alt=""
          />
          <div className="my-[20px] flex border-y border-[#eee] p-[20px] text-center max-md:block">
            {welcome.stats.map((s) => (
              <div key={s.label} className="flex-1 max-md:mb-[20px] max-md:last:mb-0">
                {s.label}
                <span className="mt-[10px] block text-[14px] text-[#888]">{s.sub}</span>
              </div>
            ))}
          </div>
          <Link
            to="/landing-pages/dashboard/profile"
            className="mb-[15px] mr-[15px] ml-auto block w-fit rounded-[6px] bg-[#0075ff] px-[10px] py-[4px] text-[14px] text-white transition-colors duration-300 hover:bg-[#0d69d5]"
          >
            Profile
          </Link>
        </div>

        <div className={card}>
          <h2 className={cardTitle}>Quick Draft</h2>
          <p className={cardDesc}>Write A Draft For Your Ideas</p>
          <form>
            <input
              className="mb-[20px] block w-full rounded-[6px] border-none bg-[#eee] p-[10px] outline-none"
              type="text"
              name="title"
              placeholder="Title"
            />
            <textarea
              className="mb-[20px] block min-h-[180px] w-full resize-none rounded-[6px] border-none bg-[#eee] p-[10px] outline-none"
              name="thought"
              placeholder="Your Thought"
            />
            <input
              className="ml-auto block w-fit cursor-pointer rounded-[6px] border-none bg-[#0075ff] px-[10px] py-[4px] text-[14px] text-white transition-colors duration-300 hover:bg-[#0d69d5]"
              type="submit"
              value="Save"
            />
          </form>
        </div>

        <div className={card}>
          <h2 className={cardTitle}>Yearly Targets</h2>
          <p className={cardDesc}>Targets Of The Year</p>
          {targets.map((t) => {
            const c = COLORS[t.color];
            return (
              <div className="mb-[20px] flex items-center" key={t.name}>
                <div
                  className={`mr-[15px] flex h-[80px] w-[80px] items-center justify-center`}
                  style={{ backgroundColor: `${c}33` }}
                >
                  <t.icon aria-hidden className="text-[25px]" style={{ color: c }} />
                </div>
                <div className="flex-1">
                  <span className="text-[14px] text-[#888]">{t.name}</span>
                  <span className="mb-[10px] mt-[5px] block font-bold">{t.value}</span>
                  <div className="relative h-[4px]" style={{ backgroundColor: `${c}33` }}>
                    <span className="absolute left-0 top-0 h-full" style={{ width: t.percent, backgroundColor: c }}>
                      <span
                        className="absolute bottom-[16px] right-[-16px] rounded-[6px] px-[5px] py-[2px] text-[13px] text-white"
                        style={{ backgroundColor: c }}
                      >
                        {t.percent}
                        <span
                          aria-hidden
                          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 border-[5px] border-solid border-transparent"
                          style={{ borderTopColor: c }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={card}>
          <h2 className={cardTitle}>Tickets Statistics</h2>
          <p className={cardDesc}>Everything About Support Tickets</p>
          <div className="flex flex-wrap gap-[20px] text-center">
            {tickets.map((t) => (
              <div key={t.label} className="w-[calc(50%-10px)] rounded-[10px] border border-[#ccc] p-[20px] text-[13px] text-[#888] max-md:w-full">
                <t.icon aria-hidden className="mb-[10px] text-[2em]" style={{ color: COLORS[t.color] }} />
                <span className="mb-[5px] block text-[25px] font-bold text-black">{t.value}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        <div className={`${card} max-md:text-center`}>
          <h2 className="mt-0 mb-[20px] text-[1.5em] font-bold">Latest News</h2>
          {news.map((n) => (
            <div
              key={n.title}
              className="flex items-center [&:not(:last-child)]:mb-[20px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#eee] [&:not(:last-child)]:pb-[20px] max-md:flex-col"
            >
              <img className="mr-[15px] w-[100px] rounded-[6px] max-md:mb-[15px] max-md:mr-0" src={n.img} alt="" />
              <div className="flex-grow">
                <h3 className="mb-[6px] text-[16px] font-bold">{n.title}</h3>
                <p className="m-0 text-[14px] text-[#888]">{n.desc}</p>
              </div>
              <div className="rounded-[6px] bg-[#eee] px-[10px] py-[4px] text-[13px] max-md:mx-auto max-md:my-[10px] max-md:w-fit">
                {n.label}
              </div>
            </div>
          ))}
        </div>

        <div className={card}>
          <h2 className="mt-0 mb-[20px] text-[1.5em] font-bold">Latest Tasks</h2>
          {tasks.map((t) => (
            <div
              key={t.title}
              className={`flex items-center justify-between [&:not(:last-child)]:mb-[15px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#eee] [&:not(:last-child)]:pb-[15px] ${
                t.done ? "opacity-30" : ""
              }`}
            >
              <div className={`flex-grow ${t.done ? "line-through" : ""}`}>
                <h3 className="mt-0 mb-[5px] text-[15px] font-bold">{t.title}</h3>
                <p className="m-0 text-[#888]">{t.desc}</p>
              </div>
              <FaRegTrashCan aria-hidden className="cursor-pointer text-black transition-colors duration-300 hover:text-[#f44336]" />
            </div>
          ))}
        </div>

        <div className={card}>
          <h2 className="mt-0 mb-[20px] text-[1.5em] font-bold">Top Search Items</h2>
          <div className="mb-[10px] flex justify-between text-[#888]">
            <div>Keyword</div>
            <div>Search Count</div>
          </div>
          {searchItems.map((s) => (
            <div key={s.keyword} className="flex items-center justify-between py-[15px]">
              <span>{s.keyword}</span>
              <span className="rounded-[6px] bg-[#eee] px-[10px] py-[4px] text-[13px]">{s.count}</span>
            </div>
          ))}
        </div>

        <div className={card}>
          <h2 className="mt-0 mb-[20px] text-[1.5em] font-bold">Latest Uploads</h2>
          <ul className="m-0 list-none p-0">
            {uploads.map((u) => (
              <li
                key={u.name}
                className="mb-[10px] flex items-center justify-between pb-[10px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#eee]"
              >
                <div className="flex items-center">
                  <img className="mr-[10px] h-[40px] w-[40px]" src={u.img} alt="" />
                  <div>
                    <span className="block">{u.name}</span>
                    <span className="text-[15px] text-[#888]">{u.author}</span>
                  </div>
                </div>
                <div className="rounded-[6px] bg-[#eee] px-[10px] py-[4px] text-[13px]">{u.size}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${card} relative`}>
          <h2 className="mt-0 mb-[20px] text-[1.5em] font-bold">Last Project Progress</h2>
          <ul className="relative m-0 list-none p-0 before:absolute before:left-[11px] before:top-0 before:h-full before:w-[2px] before:bg-[#0075ff]">
            {lastProject.map((p) => (
              <li
                key={p.label}
                className={`mt-[25px] flex items-center before:z-[1] before:mr-[15px] before:block before:h-[20px] before:w-[20px] before:shrink-0 before:rounded-full before:border-2 before:border-white before:outline-2 before:outline-[#0075ff] ${
                  p.state === "done"
                    ? "before:bg-[#0075ff]"
                    : "before:bg-white"
                } ${p.state === "current" ? "before:animate-change-color" : ""}`}
              >
                {p.label}
              </li>
            ))}
          </ul>
          <img className="absolute bottom-0 right-0 w-[160px] opacity-10 max-md:hidden" src={images.projectPng} alt="" />
        </div>

        <div className={`${card} relative`}>
          <h2 className="mt-0 mb-[25px] text-[1.5em] font-bold">Reminders</h2>
          <ul className="m-0 list-none p-0">
            {reminders.map((r) => {
              const c = COLORS[r.color];
              return (
                <li className="mt-[15px] flex items-center" key={r.title}>
                  <span aria-hidden className="mr-[15px] block h-[15px] w-[15px] shrink-0 rounded-full" style={{ backgroundColor: c }} />
                  <div className="border-l-2 pl-[15px]" style={{ borderColor: c }}>
                    <p className="mt-0 mb-[5px] text-[14px] font-bold">{r.title}</p>
                    <span className="text-[13px] text-[#888]">{r.date}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`${card} relative`}>
          <h2 className="mt-0 mb-[25px] text-[1.5em] font-bold">Latest Post</h2>
          <div className="flex items-center">
            <img className="mr-[15px] h-[48px] w-[48px] rounded-full" src={images.avatar} alt="" />
            <div>
              <span className="mb-[5px] block font-bold">{post.name}</span>
              <span className="text-[#888]">{post.time}</span>
            </div>
          </div>
          <div className="my-[20px] min-h-[140px] capitalize border-y border-[#eee] py-[20px] leading-[1.8] max-md:text-center">
            {post.content}
          </div>
          <div className="flex items-center justify-between text-[#888]">
            <div>
              <FaRegHeart aria-hidden />
              <span> {post.likes}</span>
            </div>
            <div>
              <FaRegComments aria-hidden />
              <span> {post.comments}</span>
            </div>
          </div>
        </div>

        <div className={`${card} relative`}>
          <h2 className="mt-0 mb-[25px] text-[1.5em] font-bold">Social Media Stats</h2>
          {social.map((s) => {
            const style = SOCIAL[s.klass];
            return (
              <div
                key={s.klass}
                className="mb-[10px] flex items-center justify-between rounded-[6px] p-[15px] pl-[70px]"
                style={{ backgroundColor: style.box, color: style.color }}
              >
                <s.icon
                  aria-hidden
                  className="absolute left-0 top-0 flex h-full w-[52px] items-center justify-center text-[2em] text-white transition-transform duration-300 hover:rotate-5"
                  style={{ backgroundColor: style.color }}
                />
                <span>{s.text}</span>
                <a
                  className="rounded-[6px] px-[10px] py-[4px] text-[13px] text-white"
                  style={{ backgroundColor: style.color }}
                  href="#"
                >
                  {s.action}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="m-[20px] rounded-[10px] bg-white p-[20px]">
        <h2 className="mt-0 mb-[20px] text-[1.5em] font-bold">Projects</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-separate text-[15px] [border-spacing:0]">
            <thead>
              <tr>
                {["Name", "Finish Date", "Client", "Price", "Team", "Status"].map((h) => (
                  <td key={h} className="bg-[#eee] p-[15px] font-bold">
                    {h}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {projectsTable.map((p) => (
                <tr key={p.name} className="transition-colors duration-300 hover:[&_td]:bg-[#faf7f7]">
                  <td className="border-b border-l border-[#eee] p-[15px]">{p.name}</td>
                  <td className="border-b border-l border-[#eee] p-[15px]">{p.date}</td>
                  <td className="border-b border-l border-[#eee] p-[15px]">{p.client}</td>
                  <td className="border-b border-l border-[#eee] p-[15px]">{p.price}</td>
                  <td className="border-b border-l border-[#eee] p-[15px]">
                    {p.team.map((t, i) => (
                      <img
                        key={i}
                        src={t}
                        alt=""
                        className={`h-[32px] w-[32px] rounded-full border-2 border-white bg-white p-[2px] ${i > 0 ? "-ml-[20px]" : ""}`}
                      />
                    ))}
                  </td>
                  <td className="border-b border-l border-r border-[#eee] p-[15px]">
                    <span
                      className="inline-block rounded-[6px] px-[10px] py-[4px] text-[13px] text-white"
                      style={{ backgroundColor: COLORS[p.statusClass.replace("bg-", "")] }}
                    >
                      {p.status}
                    </span>
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