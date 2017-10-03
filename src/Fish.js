import React, { Component } from 'react';
import './style.css';

class Fish extends Component {
  constructor() {
    super();

    this.state = {
      x: Math.random() * (window.innerWidth - 167),
      xDirection: 'right',
      y: Math.random() * (window.innerHeight - 67),
      z: Math.random() * -60,
      yDirection: 'down',
      xVelocity: 2,
      yVelocity: 1,
      zVelocity: 0.1
    };
  }

  chooseRandomMovement() {
    let xVelocity = Math.random()*4;
    let yVelocity = Math.random()*2;
    let zVelocity = 0.1
    let xDirection = Math.random() < 0.5 ? 'left' : 'right';
    let yDirection = Math.random() < 0.5 ? 'up' : 'down';
    let zDirection = Math.random() < 0.5 ? 'in' : 'out';
    this.setState({
      xVelocity: xVelocity,
      yVelocity: yVelocity,
      xDirection: xDirection,
      yDirection: yDirection,
      zVelocity: zVelocity,
      zDirection: zDirection
    })
  }

  tick() {
    this.move();
    if(Math.random()<0.01) this.chooseRandomMovement();
  }

  move() {
    let { xVelocity, xDirection, yVelocity, yDirection, zVelocity, zDirection } = this.state;

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

    if (this.state.z > (-1)) {
      zDirection = 'in';
    } else if (this.state.z < -69) {
      zDirection = 'out';
    }

    this.setState({
      x: this.state.x + (xDirection === 'right' ? xVelocity : -xVelocity),
      xDirection: xDirection,
      y: this.state.y + (yDirection === 'down' ? yVelocity : -yVelocity),
      yDirection: yDirection,
      z: this.state.z + (zDirection === 'in' ? -zVelocity : zVelocity),
      zDirection: zDirection
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      50
    );
  }

  render() {
    let yScale = 2 + (this.state.z / 60) ;
    let xScale = ( this.state.xDirection === 'right' ? yScale : -yScale )
    let fishScale = {transform: `scaleX(${xScale}) scaleY(${yScale})`}
    let fishStyle = { ...fishScale, left: this.state.x, top: this.state.y, zIndex: Math.round(this.state.z) }

    return (
      <img className='fish' style={fishStyle} src={this.props.image}/>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Fish;