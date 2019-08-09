import React, { Component, useRef } from 'react';
import './Refs.css';

class Refs extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setRef(node) {
    this.input = node;
  }

  handleClick() {
    this.input.focus();
  }

  render() {
    return (
      <div className="Refs">
        <input ref={this.setRef} />
        <button className="clickableButton" type="button" onClick={this.handleClick}>FOCUS INPUT</button>
      </div>
    );
  }
}

export default Refs;
