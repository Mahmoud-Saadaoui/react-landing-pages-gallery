import { Fragment } from "react";

const Toggle = ({ defaultChecked }) => (
  <label>
    <input className="toggle-checkbox" type="checkbox" defaultChecked={defaultChecked} />
    <div className="toggle-switch" />
  </label>
);

const Settings = () => (
  <>
    <h1 className="p-relative">Settings</h1>
    <div className="settings-page m-20 d-grid gap-20">
      <div className="p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Site Control</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Control The Website If There Is Maintenance</p>
        <div className="mb-15 between-flex">
          <div>
            <span>Website Control</span>
            <p className="c-grey mt-5 mb-0 fs-13">Open/Close Website And Type The Reason</p>
          </div>
          <Toggle defaultChecked />
        </div>
        <textarea className="close-message p-10 rad-6 d-block w-full" placeholder="Close Message Content" />
      </div>

      <div className="p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">General Info</h2>
        <p className="mt-0 mb-20 c-grey fs-15">General Information About Your Account</p>
        <div className="mb-15">
          <label className="fs-14 c-grey d-block mb-10" htmlFor="dashboard-first">First Name</label>
          <input className="b-none border-ccc p-10 rad-6 d-block w-full" id="dashboard-first" type="text" placeholder="First Name" />
        </div>
        <div className="mb-15">
          <label className="fs-14 c-grey d-block mb-5" htmlFor="dashboard-last">Last Name</label>
          <input className="b-none border-ccc p-10 rad-6 d-block w-full" id="dashboard-last" type="text" placeholder="Last Name" />
        </div>
        <div>
          <label className="fs-14 c-grey d-block mb-5" htmlFor="dashboard-email">Email</label>
          <input className="email b-none border-ccc p-10 rad-6 w-full mr-10" id="dashboard-email" type="email" defaultValue="o@nn.sa" disabled />
          <a className="c-blue" href="#dashboard-email">Change</a>
        </div>
      </div>

      <div className="p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Security Info</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Security Information About Your Account</p>
        <div className="sec-box mb-15 between-flex">
          <div>
            <span>Password</span>
            <p className="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
          </div>
          <a className="button bg-blue c-white btn-shape" href="#dashboard-password">Change</a>
        </div>
        <div className="sec-box mb-15 between-flex">
          <div>
            <span>Two-Factor Authentication</span>
            <p className="c-grey mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
          </div>
          <Toggle defaultChecked />
        </div>
        <div className="sec-box between-flex">
          <div>
            <span>Devices</span>
            <p className="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
          </div>
          <a className="bg-eee c-black btn-shape" href="#dashboard-devices">Devices</a>
        </div>
      </div>

      <div className="social-boxes p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Social Info</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Social Media Information</p>
        {[
          ["fa-brands fa-twitter", "Twitter Username"],
          ["fa-brands fa-facebook-f", "Facebook Username"],
          ["fa-brands fa-linkedin", "Linkedin Username"],
          ["fa-brands fa-youtube", "Youtube Username"],
        ].map(([icon, placeholder]) => (
          <div className="d-flex align-center mb-15" key={placeholder}>
            <i className={`${icon} center-flex c-grey`} />
            <input className="w-full" type="text" placeholder={placeholder} />
          </div>
        ))}
      </div>

      <div className="widgets-control p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Widgets Control</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Show/Hide Widgets</p>
        {[
          "Quick Draft",
          "Yearly Targets",
          "Tickets Statistics",
          "Latest News",
          "Latest Tasks",
          "Top Search Items",
        ].map((widget, i) => (
          <div className="control d-flex align-center mb-15" key={widget}>
            <input type="checkbox" id={`dashboard-widget-${i}`} defaultChecked={i !== 4} />
            <label htmlFor={`dashboard-widget-${i}`}>{widget}</label>
          </div>
        ))}
      </div>

      <div className="backup-control p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Backup Manager</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Control Backup Time And Location</p>
        <div className="date d-flex align-center mb-15">
          <input type="radio" name="dashboard-time" id="dashboard-daily" defaultChecked />
          <label htmlFor="dashboard-daily">Daily</label>
        </div>
        <div className="date d-flex align-center mb-15">
          <input type="radio" name="dashboard-time" id="dashboard-weekly" />
          <label htmlFor="dashboard-weekly">Weekly</label>
        </div>
        <div className="date d-flex align-center mb-15">
          <input type="radio" name="dashboard-time" id="dashboard-monthly" />
          <label htmlFor="dashboard-monthly">Monthly</label>
        </div>
        <div className="servers d-flex align-center txt-c">
          {[
            ["server-one", "Megaman"],
            ["server-two", "Zero"],
            ["server-three", "Sigma"],
          ].map(([id, name], i) => (
            <Fragment key={id}>
              <input type="radio" name="dashboard-servers" id={`dashboard-${id}`} defaultChecked={i === 1} />
              <div className="server mb-15 rad-10 w-full">
                <label className="d-block m-15" htmlFor={`dashboard-${id}`}>
                  <i className="fa-solid fa-server d-block mb-10" />
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