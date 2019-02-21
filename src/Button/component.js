import React from 'react';

const Button = ({ trackBreadCrumb, incrementCount, incrementHover, }) => (
  <button
    className="clickableButton"
    onClick={(event) => {
      incrementCount();
      trackBreadCrumb({ variables: { element: "button", type: "click" }});
    }}
    onMouseOver={incrementHover}
  >
    Click me
  </button>
)

export default Button