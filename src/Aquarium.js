import React, { Component } from 'react';
import Fish from './Fish'
import './style.css';

class Aquarium extends Component {
  render() {
    let waterStyle = {height: window.innerHeight, width: window.innerWidth}
    return (
      <div>
        <div className='water' style={{...waterStyle, zIndex:-1}}></div>
        <div className='water' style={{...waterStyle, zIndex:-10}}></div>
        <div className='water' style={{...waterStyle, zIndex:-20}}></div>
        <div className='water' style={{...waterStyle, zIndex:-30}}></div>
        <div className='water' style={{...waterStyle, zIndex:-40}}></div>
        <div className='water' style={{...waterStyle, zIndex:-50}}></div>
        <div className='water' style={{...waterStyle, zIndex:-60}}></div>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-10.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-19.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-11.gif'/>
      </div>
    );
  }
}

export default Aquarium;