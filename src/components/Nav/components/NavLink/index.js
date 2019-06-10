import React from 'react';
import { bool, func, string } from 'prop-types';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ active, handleClick, text }) => (
  <Link
    className={`Nav__link${active ? ' active' : ''}`}
    onClick={handleClick}
    to={`/${text.toLowerCase()}`}
  >
    {text}
  </Link>
);

NavLink.propTypes = {
  active: bool.isRequired,
  handleClick: func,
  text: string.isRequired
};

NavLink.defaultProps = {
  handleClick: () => {}
};

export default NavLink;
