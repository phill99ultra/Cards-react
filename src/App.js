import {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			characters : [],
			searchField: '',
			meaningOfLife: 47
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({characters: users}))
	}

	// handleClick = () => {
	// 	this.setState(prevState, prevProps, () => console.log(this.state.meaningOfLife));
		
	// }

	render() {
		const { characters, searchField } = this.state,
			filteredCharacters = characters
				.filter(character => character.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
		return (
			<div className="App">
				<h1>Strange Characters</h1>
				{/* <p>{this.state.meaningOfLife}</p>
				<button onClick={this.handleClick}>Update state</button> */}
				<SearchBox
					placeholder='search characters'
					handleChange={e => this.setState({searchField : e.target.value})}
				/>				
				<CardList characters={filteredCharacters} />		
			</div>
      	);
	}
}

// class App extends Component {
// 	clickHandle = () => {
// 		console.log('btn clicked')
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.clickHandle}>Click</button>
// 			</div>
// 		)
// 	}
// }

export default App;
