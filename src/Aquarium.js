import React, { Component } from 'react';
import Fish from './Fish'
import './style.css';

class Aquarium extends Component {
  render() {
    return (
      <div>
        <Fish />
        <Fish />
      </div>
    );
  }
}

export default Aquarium;