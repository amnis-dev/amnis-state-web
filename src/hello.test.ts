import { helloWorld } from './hello.js';

test('should say hello world', () => {
  expect(helloWorld()).toBe('Hello World');
});