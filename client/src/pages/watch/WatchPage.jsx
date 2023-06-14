import "./watch.scss";
import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { trailer } from "../../assets";

const WatchPage = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
      </div>
      <video className="video" autoPlay progress controls src={trailer} />
    </div>
  );
};

export default WatchPage;
