import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Aquarium extends Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      xDirection: 'right'
    };
  }

  tick() {
    this.move();
  }

  move() {
    let xVelocity = 1;
    let xDirection = this.state.xDirection;

    if (this.state.x > (window.innerWidth-11)) {
      xDirection = 'left';
    } else if (this.state.x < 0) {
      xDirection = 'right';
    }

    this.setState({
      x: this.state.x + (xDirection == 'right' ? xVelocity : -xVelocity),
      xDirection: xDirection
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10
    );
  }

  render() {
    var ballStyle = {left: this.state.x}
    return (
      <div>
        <div className='ball' style={ballStyle}></div>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Aquarium;