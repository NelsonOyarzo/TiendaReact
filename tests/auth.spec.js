// auth.spec.js
import { AuthProvider } from '../src/context/AuthContext';

describe('AuthProvider basic', () => {
  it('AuthProvider is a function', () => {
    expect(typeof AuthProvider).toBe('function');
  });
});