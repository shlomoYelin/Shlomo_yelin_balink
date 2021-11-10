import React, { Component } from "react";
import "./select.css";

export class Select extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '2459115' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="select-city">
        <span className="span-select"> </span>
        <select value={this.state.value} onChange={this.handleChange} className="select-input">
          <option value="2459115">New York</option>
          <option value="2442047">Los Angeles</option>
          <option value="610264">Marseille </option>
          <option value="753692">Barcelona </option>
          <option value="721943">Rome  </option>
        </select>
      </div>
    );
  }
}