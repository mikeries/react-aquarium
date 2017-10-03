import React, { Component } from 'react';
import Fish from './Fish'
import './style.css';

class Aquarium extends Component {
  render() {
    return (
      <div>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-10.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-19.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-11.gif'/>
      </div>
    );
  }
}

export default Aquarium;