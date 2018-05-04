import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      celcius: 0,
      fahrenheit: 0
    };
  }

  handleInputChange(evt) {
    var c = evt.currentTarget.value;
    this.setState({
      celcius: c,
      fahrenheit: this.toFahrenheit(c)
    });
  }

  toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter temperature in Celcius"
          onChange={this.handleInputChange}
        />

        <div>{`${this.state.fahrenheit} F`}</div>
      </div>
    );
  }
}
