import React from 'react';

const Button = ({ incrementCount, incrementHover }) => (
  <button
    className="clickableButton"
    onClick={incrementCount}
    onMouseOver={incrementHover}
    data-tag="Button"
    type="button"
  >
    Click me
  </button>
);

export default Button;

