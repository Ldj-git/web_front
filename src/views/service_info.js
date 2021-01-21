import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import home from "../img/home.png";
function service_info(props) {
  const navstlye = {
    backgroundcolor: "white",
    height: "119px",
  };
  const iconstyle = {
    marginTop: "30px",
    marginLeft: "300px",
  };
  return (
    <div>
      <div style={navstlye}>
        <NavLink exact to="/">
          <img src={home} alt="오류;;" style={iconstyle}></img>
        </NavLink>
      </div>
      <div>서비스 소개 ㅁ나ㅣㅇ러ㅣ나어러니아러</div>
    </div>
  );
}

export default withRouter(service_info);
