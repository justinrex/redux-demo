import React, { Component, useState } from 'react';
import NavLink from './components/NavLink';
import './Nav.css';

const links = [
  'Demo',
  'LifeCycle',
  'Refs'
];

const Nav = () => {
  const [active, setActive] = useState(0);
  const handleClick = index => () => setActive(index);

  return (
    <div className="Nav">
      {links.map((text, index) => (
        <NavLink
          text={text}
          key={index}
          active={active === index}
          handleClick={handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Nav;
