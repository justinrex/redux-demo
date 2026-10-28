import { Component } from 'react';
import './LifeCycle.css';

export default class LifeCycle extends Component {
  state = { title: 'Lifecycle' };

  componentDidMount() {
    this.previousTitle = document.title;
    document.title = this.state.title;
  }

  componentDidUpdate() {
    document.title = this.state.title;
  }

  componentWillUnmount() {
    document.title = this.previousTitle;
  }

  render() {
    return (
      <section className="LifeCycle" aria-labelledby="lifecycle-heading">
        <h2 id="lifecycle-heading">Synchronize the document title</h2>
        <label htmlFor="page-title">Page title</label>
        <input id="page-title" value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })} />
        <p>Change the text, then leave this example to restore the previous title.</p>
      </section>
    );
  }
}
