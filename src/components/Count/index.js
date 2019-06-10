import React from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import buttonCountSelector from '../../store/selectors/button/count';
import reselectSelector from '../../store/selectors/button/reselect';

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

// const multiplier = (state) => {
//   console.log('selectorHit');
//   const count = buttonCountSelector(state);
//   return count * 20;
// };

const mapStateToProps = (state, props) => ({
  count: buttonCountSelector(state),
  multiple: reselectSelector(state, props.n)
});

export default connect(mapStateToProps)(Count);
