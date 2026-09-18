import Sidebar from "./Sidebar";
import Head from "./Head";

const Layout = ({ children }) => (
  <div className="dashboard-page">
    <div className="flex min-h-screen bg-[#f1f5f9]">
      <Sidebar />
      <div className="w-full overflow-hidden">
        <Head />
        {children}
      </div>
    </div>
  </div>
);

export default Layout;