import { useEffect } from "react";
import "../components/Apple/css/apple.css";
import Section1 from "../components/Apple/Section1";
import Section2 from "../components/Apple/Section2";
import Section3 from "../components/Apple/Section3";
import Section4 from "../components/Apple/Section4";
import Section5 from "../components/Apple/Section5";
import Section6 from "../components/Apple/Section6";

const ApplePage = () => {
  useEffect(() => {
    document.documentElement.classList.add("apple-root");
    return () => document.documentElement.classList.remove("apple-root");
  }, []);

  return (
    <div className="apple-page">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default ApplePage;