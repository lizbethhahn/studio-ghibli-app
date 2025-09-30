import React, { Component } from 'react';

class Location extends Component {
  render () {
    return (
      <div>
        <h2>
          {this.props.location.name}
        </h2>
        <div>
          {this.props.location.climate}
        </div>
        <div>
          {this.props.location.terrain}
        </div>
      </div>
    )
  }
}

export default Location;