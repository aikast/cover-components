import React from 'react';
import PropTypes from 'prop-types';

import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';
import AnimalClass from '../AnimalClass/AnimalClass';

export default function AnimalCard({name, size, ...props}) {
	return(
		<Card 
			title="Animal"
			details={
				<AnimalDetails
					{...props}
				/>
			}
		>

			<div>
				<h3>{name}</h3>
				<div>{size}kg</div>
				
			</div>
		</Card>
		
	)
}


AnimalCard.protoTypes = {
 	name: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired
}