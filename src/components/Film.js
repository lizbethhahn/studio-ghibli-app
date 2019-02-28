import React, { Component } from 'react';

class Film extends Component {
  render () {
    return (
      <div>
        <h2>
          {this.props.title}
        </h2>
        <span>
          {this.props.decription}
        </span>
      </div>
    )
  }
}

export default Film;