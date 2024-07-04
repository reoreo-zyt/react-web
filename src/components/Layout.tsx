import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="main">
      <div className="header">
        <div className="nav">
          <NavLink to="/">首页</NavLink>
          <NavLink to="/about">关于我们</NavLink>
          <NavLink to="/objects">产品中心</NavLink>
          <NavLink to="/news">新闻资讯</NavLink>
          <NavLink to="/contact">联系我们</NavLink>
        </div>
      </div>
      {/* 类似vue的router-view组件 */}
      <Outlet />
      <div className="footer"></div>
    </div>
  );
}
