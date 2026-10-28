import multiple from './reselect';

test('derives a multiple from the actual count and responds to both inputs', () => {
  expect(multiple({ button: { count: 3 } }, 20)).toBe(60);
  expect(multiple({ button: { count: 3 } }, 5)).toBe(15);
  expect(multiple({ button: { count: 4 } }, 5)).toBe(20);
  expect(multiple({}, 5)).toBe(0);
});
