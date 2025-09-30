import React, { Component } from 'react';
import Film from './Film';

class Films extends Component {
  render () {
    console.log("films", this.props.films);
    return (
      <div>        
          {this.props.films && this.props.films.map(f => (
            <div key={f.id}>
              <Film film={f} /> 
            </div>
          ))}        
      </div>
    )
  }
}

export default Films;
