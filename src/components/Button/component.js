import React, { useState } from 'react';
import { func } from 'prop-types';

const handleFocus = () => {};

const handleClick = ({ count, incrementCount, setCount }) => () => {
  setCount(count + 1);
  incrementCount();
};

const Button = ({ incrementCount, incrementHover }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="clickableButton"
      onClick={handleClick({ count, incrementCount, setCount })}
      onMouseOver={incrementHover}
      onFocus={handleFocus}
      data-tag="IncrementButton"
      type="button"
    >
    CLICK ME
    </button>
  );
};

Button.propTypes = {
  incrementCount: func.isRequired,
  incrementHover: func.isRequired
};

export default Button;
