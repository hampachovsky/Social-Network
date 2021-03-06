import { applyMiddleware, combineReducers, createStore, compose, Action } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ThunkMiddleware)));

export type AppThunk<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
export default store;
