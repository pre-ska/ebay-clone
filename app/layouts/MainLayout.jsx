"use client";

import React from "react";
import TopMenu from "./includes/TopMenu";
import MainHeader from "./includes/MainHeader";
import SubMenu from "./includes/SubMenu";

function MainLayout({ children }) {
  return (
    <>
      <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          <TopMenu />
          <MainHeader />
          <SubMenu />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
