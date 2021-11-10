import React, { Component } from "react";
import { DayView } from "../day-view/day-view";

import "./specific-day.css";

export class SpecificDay extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dayData: null
    }
  }

  render() {
    if (!(this.props.daysWeather)) {
      console.log(this.props.daysWeather);
      return ""
    }

    console.log(this.props.daysData);

    this.props.daysWeather[0]["applicable_date"] = "today";
    this.props.daysWeather[1]["applicable_date"] = "tomorrow";

    this.state.dayData = this.props.daysWeather.find(dayWeather => {
      return dayWeather["applicable_date"] == this.props.dayDate
    })

    return (
      <div>
        <div className="example">
          <DayView dayData={this.state.dayData} isSpecificDay={true} />
        </div>
      </div>

    )
  }
}


