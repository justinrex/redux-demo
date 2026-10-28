import { connect } from 'react-redux';
import count from '../../store/selectors/button/count';
import multiple from '../../store/selectors/button/reselect';
import Count from './component';

export default connect((state, props) => ({
  count: count(state),
  multiple: multiple(state, props.n),
  hover: state.button.hover,
}))(Count);
