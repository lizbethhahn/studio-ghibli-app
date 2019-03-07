import React, { Component } from 'react';
import Film from './Film';

class Films extends Component {
  render () {
    return (
      <div>        
          {this.props.films.map(f => (
            <div key={f.id}>
              <Film film={f} /> 
            </div>
          ))}        
      </div>
    )
  }
}

export default Films;