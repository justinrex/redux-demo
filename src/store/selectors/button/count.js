import buttonSelector from './';

const DEFAULT = 0;

export default state => buttonSelector(state).count || DEFAULT;
