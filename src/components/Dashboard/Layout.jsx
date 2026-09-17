import Sidebar from "./Sidebar";
import Head from "./Head";

const Layout = ({ children }) => (
  <div className="dashboard-page">
    <div className="page d-flex">
      <Sidebar />
      <div className="content w-full">
        <Head />
        {children}
      </div>
    </div>
  </div>
);

export default Layout;