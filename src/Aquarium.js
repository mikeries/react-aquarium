import React, { Component } from 'react';
import './style.css';

class Aquarium extends Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      xDirection: 'right',
      y: 100,
      yDirection: 'down'
    };
  }

  tick() {
    this.move();
  }

  move() {
    let xVelocity = 1;
    let xDirection = this.state.xDirection;
    let yVelocity = 1;
    let yDirection = this.state.yDirection;

    if (this.state.x > (window.innerWidth-11)) {
      xDirection = 'left';
    } else if (this.state.x < 0) {
      xDirection = 'right';
    }

    if (this.state.y > (window.innerHeight-11)) {
      yDirection = 'up';
    } else if (this.state.y < 0) {
      yDirection = 'down';
    }

    this.setState({
      x: this.state.x + (xDirection === 'right' ? xVelocity : -xVelocity),
      xDirection: xDirection,
      y: this.state.y + (yDirection === 'down' ? yVelocity : -yVelocity),
      yDirection: yDirection
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      50
    );
  }

  render() {
    var ballStyle = {left: this.state.x, top: this.state.y}
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