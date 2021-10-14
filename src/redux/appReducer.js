import { getAuthUser } from 'redux/authReducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthUser());
  dispatch(initializedSuccess());
};

export default appReducer;
