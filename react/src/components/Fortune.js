import React, { Component } from 'react';

class Fortune extends Component {
  constructor(props) {
    super(props);
    this.state = { fortune: '' };
  }

  render() {
    return (
      <h1>Your Fortune: {this.state.fortune}</h1>
    );
  }
}

export default Fortune;
