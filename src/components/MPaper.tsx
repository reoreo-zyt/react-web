import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "@src/scss/MPaper.scss";

const useStyles = makeStyles(() =>
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
  }),
);

export default function MPaper() {
  const classes = useStyles();
  const images = [
    { alt: "gjdkbjd", src: "/images/gjdkbjd.png" },
    { alt: "htmbq", src: "/images/htmbq.png" },
    { alt: "jgjrjz", src: "/images/jgjrjz.png" },
    { alt: "kbclk", src: "/images/kbclk.png" },
    { alt: "lztly", src: "/images/lztly.png" },
    { alt: "syhgq", src: "/images/syhgq.png" },
  ];
  return (
    <div className={classes.root}>
      {images.map((item, index) => (
        <Paper key={index} className="paper" elevation={3}>
          <img className="img" alt={item.alt} src={item.src} />
        </Paper>
      ))}
    </div>
  );
}
