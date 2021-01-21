import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import Checker from "../component/checker";
import home from "../img/home.png";
function testt(props) {
  const navstlye = {
    backgroundcolor: "white",
    height: "119px",
  };
  const iconstyle = {
    marginTop: "30px",
    marginLeft: "300px",
  };
  const mstyle = {
    textAlign: "center",
  };
  return (
    <div>
      <div style={navstlye}>
        <NavLink exact to="/">
          <img src={home} alt="오류;;" style={iconstyle}></img>
        </NavLink>
      </div>
      <div style={mstyle}>
        <h2>질문</h2>
        <Checker></Checker>
        <h2>ㅁㄴ러ㅣㅏㄴ이라ㅓ?</h2>

        <Checker></Checker>
        <h2>ㅁ니ㅏㅇ러ㅏㅣㅓㄴㅇ라ㅓ?</h2>
        <Checker></Checker>
        <h2>ㄻㄴㅇㄻㄴㅇㄹㅇㄹ?</h2>
        <Checker></Checker>
      </div>
    </div>
  );
}

export default withRouter(testt);
