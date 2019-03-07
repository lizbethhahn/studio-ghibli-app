import React, { Component } from 'react';
import People from './People';

class People extends Component {
  render () {
    return (
      <div>        
          {this.props.people.map(p => (
            <div key={p.id}>
              <People people={p} /> 
            </div>
          ))}        
      </div>
    )
  }
}

export default People;