import React, { Component } from 'react';
import './style.css';

class Fish extends Component {
  constructor() {
    super();

    this.state = {
      x: Math.random() * (window.innerWidth - 167),
      xDirection: 'right',
      y: Math.random() * (window.innerHeight - 67),
      yDirection: 'down',
      xVelocity: 2,
      yVelocity: 1,
    };
  }

  chooseRandomMovement() {
    let xVelocity = Math.random()*4;
    let yVelocity = Math.random()*2;
    let xDirection = Math.random() < 0.5 ? 'left' : 'right';
    let yDirection = Math.random() < 0.5 ? 'up' : 'down';
    this.setState({
      xVelocity: xVelocity,
      yVelocity: yVelocity,
      xDirection: xDirection,
      yDirection: yDirection
    })
  }

  tick() {
    this.move();
    if(Math.random()<0.01) this.chooseRandomMovement();
  }

  move() {
    let { xVelocity, xDirection, yVelocity, yDirection } = this.state;

    if (this.state.x > (window.innerWidth-167)) {
      xDirection = 'left';
    } else if (this.state.x < 0) {
      xDirection = 'right';
    }

    if (this.state.y > (window.innerHeight-80)) {
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
    let fishStyle = { left: this.state.x, top: this.state.y }
    let fishClasses = 'fish' + (this.state.xDirection === 'left' ? ' flipped' : '')
    return (
      <div>
        <img className={fishClasses} style={fishStyle} src={this.props.image}/>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Fish;