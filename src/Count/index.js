import React from 'react';
import { connect } from 'react-redux';
import buttonCountSelector from '../store/selectors/button/count'

const Count = ({ count }) => (
  <div
    className="count"
    data-tag="Count"
  >
    clicked { count } times
  </div>
)

const mapStateToProps = (state) => ({
  count: buttonCountSelector(state)
})

export default connect(mapStateToProps)(Count);