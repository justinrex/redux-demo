
import { connect } from 'react-redux';
import buttonCountSelector from '../../store/selectors/button/count';
import reselectSelector from '../../store/selectors/button/reselect';
import Count from './component';

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
