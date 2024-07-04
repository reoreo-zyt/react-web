import React from "react";
import MTitle from "@components/MTitle";
import MPaper from "@components/MPaper";
import "@src/scss/Home.scss";

export default function Home() {
  const MTitleList = [
    { title: "产品展示", desc: "Product Display" },
    { title: "关于我们", desc: "About Us" },
    { title: "新闻资讯", desc: "Information News" },
    { title: "优势介绍", desc: "Advantage Point" },
  ];

  return (
    <div className="about">
      <div className="container">
        <MTitle title={MTitleList[0].title} desc={MTitleList[0].desc}></MTitle>
        <div className="paper-container">
          <MPaper></MPaper>
        </div>
        <MTitle title={MTitleList[1].title} desc={MTitleList[1].desc}></MTitle>
        <MTitle title={MTitleList[2].title} desc={MTitleList[2].desc}></MTitle>
        <MTitle title={MTitleList[3].title} desc={MTitleList[3].desc}></MTitle>
      </div>
    </div>
  );
}
