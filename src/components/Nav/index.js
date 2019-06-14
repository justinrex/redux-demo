import React, { Component } from 'react';
import NavLink from './components/NavLink';
import './Nav.css';

const links = [
  'Demo',
  'LifeCycle',
  'Refs'
];

const Nav = () => (
  <div className="Nav">
    {links.map((text, index) => (
      <NavLink
        text={text}
        key={index}
      />
    ))}
  </div>
);

// class Nav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(index) {
//     return () => this.setState({ active: index });
//   }

//   render() {
//     const { active } = this.state;

//     return (
//       <div className="Nav">
//         {links.map((text, index) => (
//           <NavLink
//             active={active === index}
//             handleClick={this.handleClick(index)}
//             text={text}
//             key={index}
//           />
//         ))}
//       </div>
//     );
//   }
// }

export default Nav;
