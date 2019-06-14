import React, { Component } from 'react';
import './LifeCycle.css';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'About'
    };
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentDidMount() {
    document.title = this.state.title;
  }

  componentDidUpdate() {
    document.title = this.state.title;
  }

  componentWillUnmount() {
    document.title = 'React App';
  }

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className="LifeCycle">
        <input
          onChange={this.updateTitle}
        />
      </div>
    );
  }
}

export default LifeCycle;
