import React, { Component } from 'react';

class Person extends Component {
  render () {
    return (
      <div>
        <h2>
          {this.props.person.name}
        </h2>
        <div>
          {this.props.person.gender}
        </div>
        <div>
          {this.props.person.films}
        </div>
      </div>
    )
  }
}

export default Film;