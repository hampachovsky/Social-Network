import { getAuthUser } from 'redux/authReducer';
import { AppThunk } from './reduxStore';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};
export type InitialStateType = typeof initialState;
type ActionsType = InitializedSuccessActionType;
type ThunkType = AppThunk<ActionsType>;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = (): ThunkType => async (dispatch) => {
  await dispatch(getAuthUser());
  dispatch(initializedSuccess());
};

export default appReducer;
