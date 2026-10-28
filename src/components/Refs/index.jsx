import { Component } from 'react';
import './Refs.css';

export default class Refs extends Component {
  render() {
    return (
      <section className="Refs" aria-labelledby="refs-heading">
        <h2 id="refs-heading">Focus an input with a ref</h2>
        <label htmlFor="focus-input">Focus target</label>
        <input id="focus-input" ref={node => { this.input = node; }} />
        <button className="clickableButton" type="button" onClick={() => this.input?.focus()}>Focus input</button>
      </section>
    );
  }
}
