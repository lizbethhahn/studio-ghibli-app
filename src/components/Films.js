import React, { Component } from 'react';
import Film from './Film';

class Films extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.films.map(f => (
            <li key={f.id}>
              <Film title={f.title} description={f.description}/> 
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Films;