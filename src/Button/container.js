import { connect } from 'react-redux';
import { incrementCount, incrementHover } from '../store/actions/button'
import Button from './component'
const mapDispatchToProps = {
  incrementCount,
  incrementHover
}

export default connect(null, mapDispatchToProps)(Button);