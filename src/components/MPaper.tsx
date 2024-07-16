import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "@src/scss/MPaper.scss";
import { useSpring, animated } from "@react-spring/web";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useSelector } from "react-redux";
import GlobalState from "@src/typings/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        width: "277px",
        height: "277px",
        margin: "8px 20px",
      },
    },
    dialog: {
      zIndex: -999,
    },
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    content: {
      width: "100%",
    },
    contentBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    media: {
      height: 140,
    },
  }),
);

export default function MPaper() {
  const isMobile = useSelector((state: GlobalState) => state.isMobile);
  console.error(isMobile);

  const classes = useStyles();
  // 使用useState来控制key值，即重新渲染的触发条件
  // eslint-disable-next-line prefer-const
  let [key, setKey] = useState(0);
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
    reset: key === 0 ? false : true, // 当key改变时，重置动画
    // onRest: () => setKey(key + 1), // 当动画结束时，更新key值
  });
  const [images, setImages] = useState([
    {
      alt: "gjdkbjd",
      src: "/images/gjdkbjd.png",
      text: "高精度可变角度光源系统",
      show: false,
      details: {
        imgs: [
          "/images/gjdkbjd-1.png",
          "/images/gjdkbjd.png",
          "/images/gjdkbjd-3.png",
        ],
      },
    },
    {
      alt: "htmbq",
      src: "/images/htmbq.png",
      text: "哈特曼波前传感器光机系统",
      show: false,
      details: {
        imgs: [
          "/images/htmbq-1.png",
          "/images/htmbq.png",
          "/images/htmbq-3.png",
          "/images/htmbq-4.png",
        ],
      },
    },
    {
      alt: "jgjrjz",
      src: "/images/jgjrjz.png",
      text: "激光加热基座光学系统",
      show: false,
      details: {
        imgs: [
          "/images/jgjrjz.png",
          "/images/jgjrjz-1.png",
          "/images/jgjrjz-2.png",
          "/images/jgjrjz-3.png",
          "/images/jgjrjz-4.png",
          "/images/jgjrjz-5.png",
          "/images/jgjrjz-6.png",
        ],
      },
    },
    {
      alt: "kbclk",
      src: "/images/kbclk.png",
      text: "可编程轮廓涂版机",
      show: false,
      details: {
        imgs: [
          "/images/kbclk.png",
          "/images/kbclk-2.png",
          "/images/kbclk-3.png",
          "/images/kbclk-4.png",
          "/images/kbclk-5.png",
        ],
      },
    },
    {
      alt: "lztly",
      src: "/images/lztly.png",
      text: "量子陀螺仪演示系统",
      show: false,
      details: {
        imgs: [
          "/images/lztly-1.png",
          "/images/lztly-2.png",
          "/images/lztly-3.png",
          "/images/lztly-4.png",
          "/images/lztly.png",
          "/images/lztly-5.png",
        ],
      },
    },
    {
      alt: "syhgq",
      src: "/images/syhgq.png",
      text: "商业化光纤激光发射系统样机",
      show: false,
      details: {
        imgs: [
          "/images/syhgq-1.png",
          "/images/syhgq-2.png",
          "/images/syhgq-3.png",
          "/images/syhgq-4.png",
          "/images/syhgq-5.png",
        ],
      },
    },
  ]);
  // eslint-disable-next-line prefer-const
  let [clickIndex, setClickIndex] = useState(0);

  const handleHoverPaper = (
    event: React.ChangeEvent<object>,
    index: number,
  ) => {
    images[index].show = true;
    setImages([
      ...images.map((item) =>
        item.show ? { ...item, show: true } : { ...item, show: false },
      ),
    ]);
    // 执行动画
    setKey(key + 1);
  };

  const handleLeavePaper = (
    event: React.ChangeEvent<object>,
    index: number,
  ) => {
    images[index].show = false;
    setImages([...images.map((item) => ({ ...item, show: false }))]);
  };

  const [open, setOpen] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = (event: React.ChangeEvent<object>, index: number) => {
    setOpen(true);
    clickIndex = index;
    setClickIndex(clickIndex);
  };

  const handleClose = () => {
    setOpen(false);
    key = 0;
    setKey(key);
  };

  return (
    <div>
      <div className={classes.root}>
        {images.map((item, index) => (
          <Paper
            key={index}
            className="paper"
            elevation={3}
            onMouseEnter={(event) => handleHoverPaper(event, index)}
            onMouseLeave={(event) => handleLeavePaper(event, index)}
            onMouseDown={(event) => handleClickOpen(event, index)}
          >
            <img className="img" alt={item.alt} src={item.src} />
            {item.show ? (
              <animated.div className="text" style={{ ...springs }}>
                {item.text}
              </animated.div>
            ) : null}
          </Paper>
        ))}
      </div>
      {open ? (
        <Dialog
          style={open ? { zIndex: 1300 } : { zIndex: -999 }}
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {images[clickIndex].text}
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <div className={classes.contentBox}>
              <PhotoProvider>
                {images[clickIndex].details?.imgs.map((item, index) => (
                  <PhotoView src={item} key={index}>
                    <img
                      src={item}
                      alt=""
                      style={{ width: "50%", height: "50%" }}
                    />
                  </PhotoView>
                ))}
              </PhotoProvider>
            </div>
          </div>
        </Dialog>
      ) : null}
    </div>
  );
}
