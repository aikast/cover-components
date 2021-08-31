import { useState } from "react";
import TemperatureInput from "../TemperatureInput/TemperatureInput";

export default function Calculator(){

	const [{temperarure, scale}, setTemp] = useState({temperarure: '', scale: 'c'});

	function handleCelsiusChange (temperarure) {
		console.log(scale, temperarure)
		setTemp({scale: 'c', temperarure})
	}	
	
	function handleFahrenheitChange(temperarure) {
		console.log(scale, temperarure)
		setTemp({scale: 'f', temperarure})
	}

	const celsius = scale === 'f' ? tryConvert(temperarure, toCelsius): temperarure;
	const fahrenheit = scale === 'c' ? tryConvert(temperarure, toFahrenheit): temperarure;

	return(
		
		<div>
			<TemperatureInput
				scale='c'
				temperature={celsius}
				onTempChange={handleCelsiusChange}
				/>
			<TemperatureInput
				scale='f'
				temperature={fahrenheit}
				onTempChange={handleFahrenheitChange}
				/>
		</div>	
	)
}

function toCelsius(fahrenheit) {
	return (fahrenheit -32) * 5/9;
}

function toFahrenheit (celsius) {
	return (celsius * 9/5) + 32
}

function tryConvert(temperature, converFunc) {
	const input = parseFloat(temperature);
	if(Number.isNaN(input)) {
		return ''
	}
	const output = converFunc(input);
	const rounded = Math.round(output *1000) / 1000;
	return rounded.toString();
}
