import { Fragment } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import Calculator from '../Calculator/Calcilator';
import './App.css';
import animals from './data';

function App() {
  return (
	  <Fragment>
		   <div className="wrapper">
      			{animals.map(item => 
					<AnimalCard
						diet={item.diet}
						key={item.name}
						name={item.name}
						size={item.size}
						scientificName={item.scientificName}
					/>
	  			)}
   			</div>
			<Calculator/>
	  </Fragment>
   
  );
}

export default App;
