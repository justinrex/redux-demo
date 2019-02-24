import React from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import buttonCountSelector from '../store/selectors/button/count';

const Count = ({ count }) => (
  <div
    className="count"
    data-tag="Count"
  >
    clicked
    {' '}
    { count }
    {' '}
    times
  </div>
);

Count.propTypes = {
  count: number
};

Count.defaultProps = {
  count: 0
};

const mapStateToProps = state => ({
  count: buttonCountSelector(state)
});

export default connect(mapStateToProps)(Count);
