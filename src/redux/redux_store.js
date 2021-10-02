import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';

let reducers = combineReducers({ profilePage: profileReducer, dialogsPage: dialogsReducer });

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
