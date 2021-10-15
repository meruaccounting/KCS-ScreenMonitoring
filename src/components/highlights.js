import React, { Component } from "react";

class Highlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  time = new Date();
  date_format = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date_format2 = {
    hour: "numeric",
    min: "numeric",
    sec: "numeric",
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
      <div>
        <div className="highlight">
          <div className="high1">
            <div className="time" id="time">
              {this.state.date.toLocaleDateString("UN-EN", this.date_format)}
            </div>

            <div className="totaltime">
              {this.state.date.toTimeString("UN-EN", this.date_format2)}
            </div>
            <div className="weekmonth">
              <div className="week" id="week">
                <strong>Week Time</strong>
                <br /> <a href="">13h 5m</a>
              </div>
              <div className="month" id="month">
                <strong>Month Time </strong>
                <br />
                <a href="">40h 39m</a>
              </div>
            </div>
          </div>
          <div className="high2">
            <div className="head">
              <a href="#" className="taskhead">
                tasks |
              </a>
              <a href="#" className="appurlhead">
                {" "}
                Apps & Url{" "}
              </a>
            </div>
            <hr />
            <div className="tasklist">
              <div className="project">
                <div className="task">This is the Project</div>
                <div className="subtask">This is the task</div>
              </div>
              <div className="timespend">
                {this.state.date.getHours()}h {this.state.date.getMinutes()}m
                {this.state.date.getSeconds()}s
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Highlights;
