import { createStore } from 'redux';
import { INCREMENT_COUNT } from './constants/button'

// const reducer = combineReducers({});

const initialState = {
  button: {
    count: 0
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        button: {
          count: state.button.count + 1
        }
      }
    default:
      return state
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
