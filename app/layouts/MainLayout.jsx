"use client";

import { useEffect, useState } from "react";
import TopMenu from "./includes/TopMenu";
import MainHeader from "./includes/MainHeader";
import SubMenu from "./includes/SubMenu";
import Footer from "./includes/Footer";
import Loading from "../components/Loading";

function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("storage", function () {
        let res = localStorage.getItem("isLoading");
        res === "false" ? setIsLoading(false) : setIsLoading(true);
      });
    }
  }, []);

  return (
    <>
      <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          {isLoading ? <Loading /> : <div></div>}
          <TopMenu />
          <MainHeader />
          <SubMenu />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
