import React, { Component } from "react";
import { Select } from "../select/select";
import "./content.css";

import Routers from "../../router/router";





export class Content extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      daysWeather: null,
      Sunrise: null,
      Sunset: null,
      Time: null,
      Title: null
    }

  }

 async handleChange(value) {
  await
    fetch(`https://www.metaweather.com/api/location/${value}/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            daysWeather: result["consolidated_weather"],
            Sunrise: this.changeFormat(result["sun_rise"]),
            Sunset: this.changeFormat(result["sun_set"]),
            Time: this.changeFormat(result["time"]),
            Title: result["title"]
          })

        },
        (error) => {
          console.log("error!:", error);
        }
      )
  }

  changeFormat(str) {
    const tmp = new Date(str)
    return tmp.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  componentDidMount(value) {
    this.handleChange('2459115') // defult - new york
  }

 
  render() {
    return (
      <div>
        
        <Select onChange={this.handleChange} />

        <div>
          <div className="titel">
            <h1>{this.state.Title} </h1>
          </div>

          <div className="daysTimes">
            <div>
              <label>Time:{this.state.Time} </label>
            </div>

            <div>
              <label>Sunrise:{this.state.Sunrise} </label>
            </div>

            <div>
              <label>Sunset:{this.state.Sunset} </label>
            </div>

          </div>

        </div>

        <div className="routerContent">
          
          <Routers
            daysWeather={this.state.daysWeather}
          />

        </div>
       
      </div >
    );
  }
}

