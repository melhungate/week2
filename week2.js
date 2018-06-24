const displayPokemon = (pokemon) => {
	console.log(pokemon)
}

//Anonymous function and callback function 
.then(function(pokemon) {
	displayPokemon(pokemon) 
})

//instead of passing anonymous function you can do:

.then(displayPokemon); //FUNCTION AS A FIRST CLASS CITIZEN



import React, { Component } from 'react'

class App extends Component {
	constructor() {
		super()
		console.log('Constructor');
	}

	componentDidMount() {
		console.log('Component Did Mount');
	}

	render() {
		console.log('Render');
		return (
			<div> </div>
			)
	}
}

export default App

//************************************************************

import React, { Component } from 'react'

class App extends Component {
	render() {
		return (
			<div>
			<h1>Todo App</h1>
			</div>

		)
	}
}

export default App;