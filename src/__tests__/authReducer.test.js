import authReducer from 'redux/authReducer';
import { setFormError, setUserData } from 'redux/authReducer';

const state = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  formError: null,
};

describe('auth reducer', () => {
  it('should state data been set', () => {
    const action = setUserData({ id: 1, login: 'test user', email: 'test@email.com' }, true);
    const newState = authReducer(state, action);
    expect(newState).not.toEqual(state);
    expect(newState.id).toEqual(1);
    expect(newState.login).toEqual('test user');
    expect(newState.email).toEqual('test@email.com');
    expect(newState.isAuth).toEqual(true);
  });
  it('the error should be setted', () => {
    const action = setFormError('test error');
    const newState = authReducer(state, action);
    expect(newState.formError).toEqual('test error');
  });
});
