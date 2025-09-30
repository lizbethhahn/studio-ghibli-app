import React, { Component } from 'react';
import Location from './Location';

class Locations extends Component {
  render () {
    return (
      <div>        
          {this.props.locations.map(l => (
            <div key={l.id}>
              <Location location={l} /> 
            </div>
          ))}        
      </div>
    )
  }
}

export default Locations;
