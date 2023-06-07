import React, { useState } from "react";
import "./list.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "../listItem/ListItem";
import { useRef } from "react";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMove, setIsMove] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMove(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
  };
  return (
    <div className="list">
      <span className="listTittle">Continue Watch</span>
      <div className="wrapper">
        <ArrowBackIosNewIcon
          className="slider-arrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMove && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosIcon
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
