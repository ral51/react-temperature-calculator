import React from 'react';
import ReactDOM from 'react-dom';
import { TemperatureInput }  from './temperatureInput';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  return (Math.round(output * 1000) / 1000).toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

class Calculator extends React.Component {

	constructor (props) {
		super(props);
		this.state = { temperature: '', scale: 'c' };
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature});
	}

	handleCelsiusChange(temperature) {
    	this.setState({scale: 'c', temperature});
	}


	render() {
		var temperature = this.state.temperature;
		const scale = this.state.scale;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
		        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
		        <TemperatureInput scale="f" temperature={fahrenheit}  onTemperatureChange={this.handleFahrenheitChange}/>
        		<BoilingVerdict celsius={parseFloat(celsius)} />
      		</div>
		);

	}

}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);