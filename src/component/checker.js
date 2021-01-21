import react, { Component } from "react";
import i1_0 from "../img/icon/1-0.png";
import i2_0 from "../img/icon/2-0.png";
import i3_0 from "../img/icon/3-0.png";
import i4_0 from "../img/icon/4-0.png";
import i5_0 from "../img/icon/5-0.png";
import i1_1 from "../img/icon/1-1.png";
import i2_1 from "../img/icon/2-1.png";
import i3_1 from "../img/icon/3-1.png";
import i4_1 from "../img/icon/4-1.png";
import i5_1 from "../img/icon/5-1.png";

class Checker extends Component {
  render() {
    const istyle = {
      width: "100px",
    };
    const agree = {
      float: "left",
      marginTop: "45px",
      marginLeft: "30vw",
      marginRight: "10px",
    };
    const disagree = {
      float: "left",
      marginLeft: "30vw",
      marginTop: "45px",
    };
    return (
      <div>
        <div style={agree}>동의</div>
        <div>
          <img src={i1_0} style={istyle} />
          <img src={i2_0} style={istyle} />
          <img src={i3_0} style={istyle} />
          <img src={i4_0} style={istyle} />
          <img src={i5_0} style={istyle} />
        </div>
        <div>비동의</div>

        {/* <form>
          <input type="radio"></input>매우 아니다.
          <input type="radio"></input>약간 아니다.
          <input type="radio"></input>보통
          <input type="radio"></input>약간 그렇다.
          <input type="radio"></input>매우 그렇다.
        </form> */}
      </div>
    );
  }
}

export default Checker;
