
import { useState } from "react";
import BoilingVerdict from "../BoilingVerdict/BoilingVerdict";

const scaleNames = {
	c: 'Celcius',
	f: 'Fahrenheit'
}

export default function TemperatureInput({scale, temperature, onTempChange}) {

	function handleChange(e) {
		onTempChange(e.target.value)
	}
	
	return(
		<fieldset>
			<legend>
				Enter temp in {scaleNames[scale]} degrees:
			</legend>
			<input
				value={temperature}
				onChange={handleChange}
			/>
		</fieldset>
	)
	
}