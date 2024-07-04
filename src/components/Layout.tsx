import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import MTabs from "@components/MTabs";
import "@src/scss/Layout.scss";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  root: {
    width: 1200,
    color: "#fff",
    background: "#3f51b5",
  },
  ".Mui-selected": {
    color: "#fff !important",
    fontSize: "14px",
  },
});

export default function Layout() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
      <div className="footer">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="地址：xx市xx区xx镇xx路"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="电话：010-80000000"
            icon={<PhoneIcon />}
          />
          <BottomNavigationAction
            label="邮箱：xx@yourdomain.com"
            icon={<EmailIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}
