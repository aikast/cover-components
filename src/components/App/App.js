import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';
import animals from './data';

function App() {
  return (
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
  );
}

export default App;
