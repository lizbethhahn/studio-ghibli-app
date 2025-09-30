import React, { Component } from 'react';
import Person from './Person';

class People extends Component {
  render () {
    return (      
      <div>        
          {this.props.people && this.props.people.map(p => (
            <div key={p.id}>
              <Person person={p} /> 
            </div>
          ))}        
      </div>
    )
  }
}

export default People;