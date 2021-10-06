import { applyMiddleware, combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';
import authReducer from './auth_reducer';
import ThunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
window.store = store;

export default store;
