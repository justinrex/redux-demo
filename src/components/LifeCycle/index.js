import React, { Component, useState, useEffect } from 'react';
import './LifeCycle.css';

// class LifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'About'
//     };
//     this.updateTitle = this.updateTitle.bind(this);
//   }

//   componentDidMount() {
//     document.title = this.state.title;
//   }

//   componentDidUpdate() {
//     document.title = this.state.title;
//   }

//   componentWillUnmount() {
//     document.title = 'React App';
//   }

//   updateTitle(event) {
//     this.setState({ title: event.target.value });
//   }

//   render() {
//     return (
//       <div className="LifeCycle">
//         <input
//           onChange={this.updateTitle}
//         />
//       </div>
//     );
//   }
// }

const LifeCycle = () => {
  const [title, setTitle] = useState('LifeCycle Demo');

  useEffect(() => {
    document.title = title;
    return () => { document.title = 'React App'; };
  });

  function updateTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="LifeCycle">
      <input onChange={updateTitle} />
    </div>
  );
};

export default LifeCycle;

