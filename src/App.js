import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import Locations from './components/Locations';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      people: [],
      locations: []
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
    await this.getData('https://ghibliapi.herokuapp.com/locations', 'locations')
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/films" component={ () => <Films films={this.state.films} /> } />
          <Route path="/people" component={ () => <People people={this.state.people} /> } />
          <Route path="/locations" component={ () => <Locations location={this.state.location} /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
