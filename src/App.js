// App.js File 
import React from 'react'; 
import RollDice from './Components/RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas) 

function App() { 
	return ( 
		<div> 
			<RollDice /> 
		</div> 
	); 
} 

export default App; 
