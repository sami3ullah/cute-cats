import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.component';

class App extends Component{

  // constructor method
  constructor(){
    super();

    this.state = {
      cats: [],
      searchField: ''
    };
  }

  // when this app components first builts in DOM, this method is called
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cats: users}))
  }


  // main rendering method, everything of app renders here
  render(){

    const {cats, searchField} = this.state;
    const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Cute Cats</h1>
        <SearchBox 
          placeholder="Search cat" 
          handleChange= {e => this.setState({searchField: e.target.value})} 
        />  
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;