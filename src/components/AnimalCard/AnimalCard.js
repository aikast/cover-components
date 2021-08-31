import React from 'react';

export default function AnimalCard({diet, name, size}) {
	return(
		<div>
			<h3>{name}</h3>
			<div>{size}kg</div>
			<div>{diet.join(', ')}</div>
		</div>
	)
}