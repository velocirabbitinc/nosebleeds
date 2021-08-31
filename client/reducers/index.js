import { combineReducers } from 'redux';
 import geekReducer from './geekReducer';
  
 export default combineReducers({
   geek: geekReducer,
 });
  