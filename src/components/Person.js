// import React and Component from react
import React, { Component } from 'react'

// create a Class named Person that is of type Component
class Person extends Component {
  // constuctor for Person
  constructor () {
    // calls the Component constructor
    super()
    // sets this.state = an object
    // adds a films key to the object with a value of empty array
    this.state = {
      films: []
    }
  }

  // defines an async function getData with a parameter of url
  async getData (url) {
    // creates a variable that is set to the result of fetch with a url
    let response = await fetch(url)
    // returns the result of response.json which will be the json
    return await response.json()
  }

  // defines an async componentDidMount which will get called once the Component mounts
  async componentDidMount () {
    // Promise.all will wait handle an array or promises
    // this.props.person.films.map will loop over all the films
    // each film will be labeled film, add handled with async
    Promise.all(this.props.person.films.map(async (film) => {
      // returns the await of this.getData passing in the url
      return await this.getData(film)
      //once completed then
    })).then(completed => {
      // sets the state with the key of films, value of completed
      this.setState({ films: completed })
    })
  }

  // render function, which gets called when it is time to render
  render () {
    // returns the html
    return (
      <div>
        <h2>
          {this.props.person.name}
        </h2>
        <div>
          {this.props.person.gender}
        </div>
        <div>
          {this.state.films.map(film => <div key={film.id}>{film.title}</div>)}
        </div>
      </div>
    )
  }
}

// exports the default Person
export default Person