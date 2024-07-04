import React from "react";
import { Outlet } from "react-router-dom";
import MTabs from "@components/MTabs";
import "@src/scss/Layout.scss";

export default function Layout() {
  return (
    <div className="main">
      <div className="header">
        <div className="nav">
          <div className="title-header">
            <div className="title-header-left">
              <span className="title-header-left-spanL">Electronics</span>
              <span className="title-header-left-spanR">Design</span>
            </div>
            <div className="title-header-right">TEL：400-8888-8888</div>
          </div>
          <div className="nav-links">
            <MTabs></MTabs>
          </div>
        </div>
      </div>
      {/* 类似vue的router-view组件 */}
      <Outlet />
      <div className="footer"></div>
    </div>
  );
}
