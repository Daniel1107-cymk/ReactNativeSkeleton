import {combineReducers} from 'redux';
import TestReducer from '../reducers/test';

const rootReducer = combineReducers({TestReducer});

const configureStore = () => {
  return rootReducer;
};

export default configureStore;
