/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useNavigate, useLocation } from "react-router-dom";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const location = useLocation();
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

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<object>, newValue: number) => {
    setValue(newValue);
    clickTab(navLinkData[newValue].path);
  };

  const clickTab = (path: string) => {
    navigate(path);
  };

  React.useEffect(() => {
    const pathName = location.pathname;
    const index = navLinkData.findIndex((item) => item.path === pathName);
    setValue(index);
  }, [location]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {navLinkData.map((item, index) => (
            <Tab key={index} label={item.name} {...a11yProps(index)}></Tab>
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}
