import React, { Component } from 'react';

class Film extends Component {
  render () {
    return (
      <div>
        <h2>
          {this.props.film.title}
        </h2>
        <div>
          {this.props.film.description}
        </div>
        <div>
          {this.props.film.release_date}
        </div>
        <div>
          {this.props.film.director}
        </div>
      </div>
    )
  }
}

export default Film;