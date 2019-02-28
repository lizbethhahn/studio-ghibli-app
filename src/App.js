import React, { Component } from 'react';
import './App.css';
import Films from './components/Films';


class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ films: responseData });
      })
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
 