import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";

import service_info from "../img/service_info.png";
import test from "../img/test.png";
import category from "../img/category.png";
import mid from "../img/mid.png";
import btn from "../img/btn.png";
import home from "../img/home.png";
function main(props) {
  const mainimgstyle = {
    width: "100vw",
  };
  const navstlye = {
    backgroundcolor: "white",
    height: "119px",
  };
  const iconstyle = {
    marginTop: "30px",
    marginLeft: "300px",
  };
  const m1style = {
    float: "right",
    marginTop: "50px",
    marginRight: "300px",
  };

  return (
    <div>
      <div style={navstlye}>
        <NavLink exact to="/">
          <img src={home} alt="오류;;" style={iconstyle}></img>
        </NavLink>

        <NavLink exact to="/category">
          <img src={category} style={m1style}></img>
        </NavLink>
        <NavLink exact to="/test">
          <img src={test} style={m1style}></img>
        </NavLink>
        <NavLink exact to="/service_info">
          <img src={service_info} style={m1style}></img>
        </NavLink>
      </div>

      <img src={mid} alt="오류;;" style={mainimgstyle}></img>
      <img src={btn} alt="오류;;" style={mainimgstyle}></img>
    </div>
  );
}

export default withRouter(main);
