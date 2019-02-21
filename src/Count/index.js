import React from 'react';
import { connect } from 'react-redux';

const Count = ({ count }) => {
  console.log('rendering count')

  return (
    <div className="count">
      clicked { count } times
    </div>
  )
}


const mapStateToProps = (state) => ({
  count: state.button.count
})

export default connect(mapStateToProps)(Count);