import buttonSelector from '.';

const DEFAULT = [];

export default state => buttonSelector(state).oddNumbers || DEFAULT;
