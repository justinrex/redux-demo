import React from 'react';
import { number } from 'prop-types';

const Count = ({ count, multiple }) => (
  <div
    className="count"
    data-tag="Count"
  >
    {`clicked ${count} times `}
    <br />
    {/* { `multiplier: ${multiple}`} */}
  </div>
);

Count.propTypes = {
  count: number,
  multiple: number
};

Count.defaultProps = {
  count: 0,
  multiple: 0
};

export default Count;
