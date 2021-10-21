import appReducer from 'redux/appReducer';
import { initializedSuccess } from 'redux/appReducer';

const state = {
  initialized: false,
};

describe('app reducer', () => {
  it('initialized should be true', () => {
    const newState = appReducer(state, initializedSuccess());
    expect(newState.initialized).toBe(true);
  });
  it('state should be returned whitout changes', () => {
    const newState = appReducer(state, { type: 'w' });
    expect(newState).toEqual(state);
  });
});
