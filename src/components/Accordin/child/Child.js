import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./child.scss";

const Child = ({ icon1, title, info, toggle, index, clicked }) => {
  return (
    <div className="child">
      <div className="question" onClick={() => toggle(index)}>
        <div className="left">
          <li>{icon1}</li>
          <h1>{title}</h1>
        </div>
        <div className="right">
          {/* {icon2} */}
          <FaChevronDown className={clicked === index ? "active" : ""} />
        </div>
      </div>
      <div className={clicked === index ? "answer active" : "answer"}>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Child;
