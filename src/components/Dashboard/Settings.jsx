import { Fragment } from "react";
import { FaTwitter, FaFacebookF, FaLinkedin, FaYoutube, FaServer } from "react-icons/fa6";
import Toggle from "./Toggle";
import PageTitle from "./PageTitle";

const card = "rounded-[10px] bg-white p-[20px]";
const cardTitle = "mt-0 mb-[10px] text-[1.5em] font-bold";
const cardDesc = "mt-0 mb-[20px] text-[15px] text-[#888]";

const dateRadio = (id, label, checked) => (
  <div className="mb-[15px] flex items-center" key={id}>
    <input type="radio" name="dashboard-time" id={id} defaultChecked={checked} className="peer sr-only" />
    <label
      htmlFor={id}
      className="relative cursor-pointer pl-[30px] before:absolute before:left-0 before:top-1/2 before:-mt-[11px] before:h-[18px] before:w-[18px] before:rounded-full before:border-2 before:border-[#888] before:transition-colors after:absolute after:left-[5px] after:top-[5px] after:h-[12px] after:w-[12px] after:scale-0 after:rounded-full after:bg-[#0075ff] after:transition-transform after:duration-300 peer-checked:before:border-[#0075ff] peer-checked:after:scale-100"
    >
      {label}
    </label>
  </div>
);

const Settings = () => (
  <>
    <PageTitle>Settings</PageTitle>
    <div className="m-[20px] grid gap-[20px] [grid-template-columns:repeat(auto-fill,minmax(500px,1fr))] max-md:mx-[10px] max-md:gap-[10px] max-md:[grid-template-columns:minmax(100px,1fr)]">
      <div className={card}>
        <h2 className={cardTitle}>Site Control</h2>
        <p className={cardDesc}>Control The Website If There Is Maintenance</p>
        <div className="mb-[15px] flex items-center justify-between">
          <div>
            <span>Website Control</span>
            <p className="mt-[5px] mb-0 text-[13px] text-[#888]">Open/Close Website And Type The Reason</p>
          </div>
          <Toggle defaultChecked />
        </div>
        <textarea
          className="block min-h-[150px] w-full resize-none rounded-[6px] border border-[#ccc] p-[10px] outline-none"
          placeholder="Close Message Content"
        />
      </div>

      <div className={card}>
        <h2 className={cardTitle}>General Info</h2>
        <p className={cardDesc}>General Information About Your Account</p>
        <div className="mb-[15px]">
          <label className="mb-[10px] block text-[14px] text-[#888]" htmlFor="dashboard-first">First Name</label>
          <input
            className="block w-full rounded-[6px] border border-[#ccc] bg-transparent p-[10px] outline-none"
            id="dashboard-first"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="mb-[15px]">
          <label className="mb-[5px] block text-[14px] text-[#888]" htmlFor="dashboard-last">Last Name</label>
          <input
            className="block w-full rounded-[6px] border border-[#ccc] bg-transparent p-[10px] outline-none"
            id="dashboard-last"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label className="mb-[5px] block text-[14px] text-[#888]" htmlFor="dashboard-email">Email</label>
          <input
            className="mr-[10px] inline-flex w-[calc(100%-80px)] rounded-[6px] border border-[#ccc] bg-transparent p-[10px] outline-none disabled:cursor-no-drop disabled:bg-[#f0f4f8] disabled:text-[#bbb]"
            id="dashboard-email"
            type="email"
            defaultValue="o@nn.sa"
            disabled
          />
          <a className="text-[#0075ff]" href="#dashboard-email">Change</a>
        </div>
      </div>

      <div className={card}>
        <h2 className={cardTitle}>Security Info</h2>
        <p className={cardDesc}>Security Information About Your Account</p>
        <div className="mb-[15px] flex items-center justify-between border-b border-[#eee] pb-[15px]">
          <div>
            <span>Password</span>
            <p className="mt-[5px] mb-0 text-[13px] text-[#888]">Last Change On 25/10/2021</p>
          </div>
          <a className="rounded-[6px] bg-[#0075ff] px-[10px] py-[4px] text-white transition-colors duration-300 hover:bg-[#0d69d5]" href="#dashboard-password">Change</a>
        </div>
        <div className="mb-[15px] flex items-center justify-between border-b border-[#eee] pb-[15px]">
          <div>
            <span>Two-Factor Authentication</span>
            <p className="mt-[5px] mb-0 text-[13px] text-[#888]">Enable/Disable The Feature</p>
          </div>
          <Toggle defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span>Devices</span>
            <p className="mt-[5px] mb-0 text-[13px] text-[#888]">Check The Login Devices List</p>
          </div>
          <a className="rounded-[6px] bg-[#eee] px-[10px] py-[4px] text-black" href="#dashboard-devices">Devices</a>
        </div>
      </div>

      <div className={card}>
        <h2 className={cardTitle}>Social Info</h2>
        <p className={cardDesc}>Social Media Information</p>
        {[
          [FaTwitter, "Twitter Username"],
          [FaFacebookF, "Facebook Username"],
          [FaLinkedin, "Linkedin Username"],
          [FaYoutube, "Youtube Username"],
        ].map(([Icon, placeholder]) => (
          <div className="mb-[15px] flex items-center [&:focus-within>i>svg]:text-black" key={placeholder}>
            <i className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-l-[6px] border border-r-0 border-[#ddd] bg-[#f6f6f6] text-[16px] text-[#666]">
              <Icon aria-hidden />
            </i>
            <input className="h-[40px] w-full rounded-r-[6px] border border-[#ddd] bg-[#f6f6f6] pl-[10px] outline-none" type="text" placeholder={placeholder} />
          </div>
        ))}
      </div>

      <div className={card}>
        <h2 className={cardTitle}>Widgets Control</h2>
        <p className={cardDesc}>Show/Hide Widgets</p>
        {[
          "Quick Draft",
          "Yearly Targets",
          "Tickets Statistics",
          "Latest News",
          "Latest Tasks",
          "Top Search Items",
        ].map((widget, i) => (
          <div className="mb-[15px] flex items-center" key={widget}>
            <input
              type="checkbox"
              id={`dashboard-widget-${i}`}
              defaultChecked={i !== 4}
              className="peer sr-only"
            />
            <label
              htmlFor={`dashboard-widget-${i}`}
              className="relative cursor-pointer pl-[30px] text-[15px] font-bold before:absolute before:left-0 before:top-1/2 before:-mt-[9px] before:h-[14px] before:w-[14px] before:rounded-[4px] before:border-2 before:border-[#888] before:transition-colors after:absolute after:left-0 after:top-1/2 after:-mt-[9px] after:flex after:h-[18px] after:w-[18px] after:scale-0 after:items-center after:justify-center after:rounded-[4px] after:bg-[#0075ff] after:text-[12px] after:text-white after:transition-transform after:duration-300 after:content-['✓'] peer-checked:before:border-[#0d69d5] peer-checked:after:scale-100 hover:before:border-[#0d69d5]"
            >
              {widget}
            </label>
          </div>
        ))}
      </div>

      <div className={card}>
        <h2 className={cardTitle}>Backup Manager</h2>
        <p className={cardDesc}>Control Backup Time And Location</p>
        {dateRadio("dashboard-daily", "Daily", true)}
        {dateRadio("dashboard-weekly", "Weekly", false)}
        {dateRadio("dashboard-monthly", "Monthly", false)}
        <div className="flex items-center justify-center border-t border-[#eee] pt-[20px] text-center max-md:flex-col">
          {[
            ["server-one", "Megaman"],
            ["server-two", "Zero"],
            ["server-three", "Sigma"],
          ].map(([id, name], i) => (
            <Fragment key={id}>
              <input type="radio" name="dashboard-servers" id={`dashboard-${id}`} defaultChecked={i === 1} className="peer sr-only" />
              <div className="mb-[15px] w-full rounded-[10px] border-2 border-[#eee] peer-checked:border-[#0075ff] peer-checked:text-[#0075ff]">
                <label className="m-[15px] block cursor-pointer" htmlFor={`dashboard-${id}`}>
                  <FaServer aria-hidden className="mb-[10px] block text-[2em]" />
                  {name}
                </label>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Settings;