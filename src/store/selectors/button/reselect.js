import { createSelector } from 'reselect';
// import buttonSelector from '.';

const DEFAULT = [];
const buttonSelector = () => DEFAULT;

export default createSelector(
  [buttonSelector],
  (button) => {
    console.log('reselecting');

    return button.length * 20;
  }
);
