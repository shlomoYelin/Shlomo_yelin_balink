import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ChangeDate } from "../../scripts/DateLogic";
import { getClassNeme } from "../../scripts/meteorology"

import "./day-view.css";

export class DayView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const onclike = () => {
            this.props.linkOnclik(this.props.dayData["applicable_date"])
        }

        let applicable_date

        let button
        let className
        if (this.props.isSpecificDay) {
            applicable_date =
                <label>
                    {ChangeDate(this.props.dayData["applicable_date"])}
                </label>;

            button =
            <Link to="/" className="next">

                <div className="btn-back-wrap">
                    <button className="btn-back">
                    </button>
                </div>
                </Link>;

            {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */ }

            className = "row";
        }
        else {
            applicable_date =
                <label>
                    <Link to="specificDay" onClick={onclike} >
                        {ChangeDate(this.props.dayData["applicable_date"])}
                    </Link>
                </label>
        }
        return (


            <div className="item">

                {button}

                <div className={className}>

                    {applicable_date}

                    <div className="state">
                        <span className={(this.props.dayData["weather_state_name"]).replace(/ /g, "_")}>
                        </span><label> {this.props.dayData["weather_state_name"]}</label>
                    </div>

                    <div>
                        <label>
                            Max:{~~(this.props.dayData["max_temp"])}°C
                        </label>
                    </div>

                    <div>
                        <label>
                            Min:{~~(this.props.dayData["min_temp"])}°C
                        </label>
                    </div>

                    <div>
                        <label>
                            <i className={getClassNeme(~~(this.props.dayData["wind_direction"]))}></i> {~~(this.props.dayData["wind_speed"])}mph
                        </label>
                    </div>

                </div>

                <div className={className}>
                    <label>
                        <h4>Humidity:</h4> {this.props.dayData["humidity"]}%
                    </label>
                </div>

                <div className={className}>
                    <label>
                        <h4>Visibility:</h4>{(this.props.dayData["visibility"]).toFixed(1)}miles
                    </label>
                </div>

                <div className={className}>
                    <label>
                        <h4>Pressure:</h4>{~~(this.props.dayData["air_pressure"])}mb
                    </label>
                </div>

                <div className={className}>
                    <label>
                        <h4>Confidence:</h4>{this.props.dayData["predictability"]}%
                    </label>
                </div>
            </div>

        )
    }
}

