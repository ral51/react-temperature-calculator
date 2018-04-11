import React from 'react';
import ReactDOM from 'react-dom';
import { TemperatureInput }  from './temperatureInput';
import { BoilingVerdict }  from './boilingVerdict';
import { toCelsius, toFahrenheit, tryConvert }  from './convertInput';

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
				<BoilingVerdict temperature={celsius}/>
			</div>
		);
	}
}

ReactDOM.render(<Calculator />, document.getElementById('root'));