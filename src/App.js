import {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			characters : [],
			searchField: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({characters: users}))
	}
	render() {
		const { characters, searchField } = this.state,
			filteredCharacters = characters
				.filter(character => character.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
		return (
			<div className="App">
				<h1>Strange Characters</h1>
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
