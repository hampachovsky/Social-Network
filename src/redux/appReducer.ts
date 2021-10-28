import { getAuthUser } from 'redux/authReducer';
import { AppThunk, InferActionsTypes } from './reduxStore';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = AppThunk<ActionsType>;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () =>
    ({
      type: INITIALIZED_SUCCESS,
    } as const),
};

export const initializeApp = (): ThunkType => async (dispatch) => {
  await dispatch(getAuthUser());
  dispatch(actions.initializedSuccess());
};

export default appReducer;
