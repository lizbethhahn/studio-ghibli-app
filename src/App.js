import React, { Component } from 'react';
import './App.css';
import Films from './components/Films';


class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      people: []
    };
  }

  async getData(url, key) {
    let response = await fetch(url)
    let json = await response.json()
    this.setState({ [key]: json }); 
  }
  async componentDidMount() { 
    await this.getData('https://ghibliapi.herokuapp.com/films', 'films') 
    await this.getData('https://ghibliapi.herokuapp.com/people', 'people')
  }

  render() {   
    return (
      <div className="App">
         <Films films={this.state.films} />
      </div>
    );
  }
}

export default App;
 