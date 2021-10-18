import React, { Component } from "react";
import logo from "../images/ss1.jpg";
import logo1 from "../images/ss2.jpg";
import pencil from "../images/pencil.svg";
class Screenshot extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  date_format = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date_format2 = {
    hour: "numeric",
    min: "numeric",
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div className="Screendisp">
        <div className="activity">
          <div className="activity_time">
            {this.state.date.getHours()}h {this.state.date.getMinutes()}m{"-"}
            {this.state.date.getHours()}h {this.state.date.getMinutes()}m
          </div>
          <div className="activity_label">
            <div className="project_name">
              <span>Web Development IN-project</span>
            </div>
            <div className="activity_task">Coding</div>
          </div>
          <div className="edit_time">
            <svg width={100} height={40}>
              <image href={pencil} />
            </svg>
          </div>
        </div>
        <div className="screenshot">
          <img src={logo} alt="ss1" />
        </div>
        <div className="activity">
          <div className="activity_time">
            {this.state.date.getHours()}h {this.state.date.getMinutes()}m{"-"}
            {this.state.date.getHours()}h {this.state.date.getMinutes()}m
          </div>
          <div className="activity_label">
            <div className="project_name">
              <span>Web Development IN-project</span>
            </div>
            <div className="activity_task">Coding</div>
          </div>
          <div className="edit_time">
            {/* <button>{pencil}</button> */}
            <svg width={100} height={40}>
              <image href={pencil} />
            </svg>
          </div>
        </div>
        <div className="screenshot">
          <img src={logo1} alt="ss2" />
        </div>
      </div>
    );
  }
}
export default Screenshot;
