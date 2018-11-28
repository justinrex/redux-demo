import { INCREMENT_COUNT, INCREMENT_HOVER } from '../constants/button'

const initialState = {
  count: 0,
  hover: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case INCREMENT_HOVER:
      return {
        ...state,
        hover: state.hover + 1
      }
    default:
      return state
  }
}