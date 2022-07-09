import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Parker')).toBe('Hello Parker');
});
