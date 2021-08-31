import PropTypes from 'prop-types';
import "./AnimalDetails.css";

function convertDiet (diet) {
	switch(diet) {
		case 'insects':
			return '🥩'
		case 'meat':
			return '🌿'
		case 'plants':
			return '🐜'
		default:
			return '🥩, 🌿'
	}
}

export default function AnimalDetails({diet, scientificName}) {
	return(
		<div className='details'>
			<h4>Details:</h4>
			<div>
				Scientific Name: {scientificName}
			</div>
			<div>
				Diet: {diet.map(item=> convertDiet(item)).join(' ')}
			</div>

		</div>
	)
}

AnimalDetails.propTypes = {
	diet: PropTypes.arrayOf(PropTypes.string).isRequired
}
