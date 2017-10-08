import React, { Component } from 'react';
import Fish from './Fish'
import './style.css';

class Aquarium extends Component {
  render() {
    return (
      <div>
        <div className='water' style={{ zIndex:-1 }}></div>
        <div className='water' style={{ zIndex:-10 }}></div>
        <div className='water' style={{ zIndex:-20 }}></div>
        <div className='water' style={{ zIndex:-30 }}></div>
        <div className='water' style={{ zIndex:-40 }}></div>
        <div className='water' style={{ zIndex:-50 }}></div>
        <div className='water' style={{ zIndex:-60 }}></div>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-10.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-19.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-11.gif'/>
        <Fish image='./images/clownfishb.gif'/>
      </div>
    );
  }
}

export default Aquarium;