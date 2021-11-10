import React, { Component, useCallback } from "react";
import "./days-view.css";
import { ChangeDate } from "../../scripts/DateLogic"
import { DayView } from "../day-view/day-view";

export class DaysView extends Component {

  constructor(props){
    super(props);

    this.state = {
      dayId:null
    };
  }

  render() {
    if (!(this.props.daysWeather)) {
      return ""
    }

    this.props.daysWeather[0]["applicable_date"] = "today";
    this.props.daysWeather[1]["applicable_date"] = "tomorrow";

    return (
      <div>
        <div>
          {this.props.daysWeather.map(
            dayWeather => {
              return (
                <DayView key={dayWeather["id"]} dayData={dayWeather} linkOnclik={ dayDate => { this.props.setDayDate(dayDate) } } />
                )
            }
          )}
        </div>
      </div>

    )
  }
}