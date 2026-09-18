import { useLocation } from "react-router-dom";
import Layout from "../components/Dashboard/Layout";
import Home from "../components/Dashboard/Home";
import Settings from "../components/Dashboard/Settings";
import Profile from "../components/Dashboard/Profile";
import Projects from "../components/Dashboard/Projects";
import Courses from "../components/Dashboard/Courses";
import Friends from "../components/Dashboard/Friends";
import Files from "../components/Dashboard/Files";
import Plans from "../components/Dashboard/Plans";

const sections = {
  "": Home,
  settings: Settings,
  profile: Profile,
  projects: Projects,
  courses: Courses,
  friends: Friends,
  files: Files,
  plans: Plans,
};

const DashboardPage = () => {
  const { pathname } = useLocation();
  const section = pathname.replace("/landing-pages/dashboard", "").replace(/^\/+|\/+$/g, "");
  const Section = sections[section] ?? Home;

  return (
    <Layout>
      <Section />
    </Layout>
  );
};

export default DashboardPage;