import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import MButton from "@components/MButton";
import "@src/scss/Layout.scss";

export default function Layout() {
  const navLinkData = [
    {
      path: "/",
      name: "首页",
    },
    {
      path: "/about",
      name: "关于我们",
    },
    {
      path: "/objects",
      name: "产品中心",
    },
    {
      path: "/news",
      name: "新闻资讯",
    },
    {
      path: "/contact",
      name: "联系我们",
    },
  ];

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
            {navLinkData.map((item, index) => (
              <NavLink key={index} to={item.path}>
                <MButton title={item.name}></MButton>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      {/* 类似vue的router-view组件 */}
      <Outlet />
      <div className="footer"></div>
    </div>
  );
}
