import React, { useState } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { trailer } from "../../assets";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="item-info">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="item-info-top">
              <span>1h 14m</span>
              <span className="limit">16+</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              mollitia eaque laborum, autem exercitationem adipisci optio!
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
