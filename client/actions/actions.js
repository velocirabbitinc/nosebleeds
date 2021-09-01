import axios from 'axios';
import * as types from '../constants/actionTypes';

//ASYNC ACTIONS
export const SIGN_UP_USER = (username, password) => (dispatch, getState) => {
  axios.post('/user/createUser/', {username: username, password: password}) // location: navigator.geolocation()})
    .then((info) => {
      console.log(info.data)
      if (info.status === 200 && info.data.data === true){
        dispatch({ 
          type: types.SIGN_UP_USER,
          payload: {username: username, userID: info.data.userID}
        });
      } 
    })
    .catch( e => {alert("This username already exists. Please pick a different username")});
}

export const LOGIN = (username, password) => (dispatch, getState) => {
  axios.post('/user/authUser/',{username: username, password: password})
    .then((info) => {
      console.log(info.data)
      if (info.status === 200){
        dispatch({ 
          type: types.LOGIN,
          payload: {username: username, userID: info.data.userID}
        });
      } 
    })
    .catch( e => {alert("Incorrect password. Please try again.")});
};

 export const LOG_OUT = () => (dispatch, getState) => {
   const userID = getState().geek.userID;
   axios.post('API ENDPOINT PLACEHOLDER', {userID: userID}) 
     .then(({status}) => {
       if (status === 200){
         dispatch({
           type: types.LOG_OUT,
         })
       }
     })
     .catch(console.error)
 };

 export const ADD_FAV = (fav) => (dispatch,getState ) => {
   const userID = getState().geek.userID;
   axios.post('API ENDPOINT PLACEHOLDER', {userID, fav})
     .then((info) => {
       if(info.status === 200){
         console.log('Fav added')
         dispatch({
           type: types.ADD_FAV,
          //  payload: DISPLAY UPDATED CARDS WITH FAVORITES
         })
       } // WHAT HAPPENS IF WE CAN'T FIND THE PERFORMER?
     })
     .catch(console.error)
 };

 export const BUY_TIX = (event) => (dispatch, getState) => {
   //MAKE REDIRECT REQUEST
  };
   
//SYNC ACTIONS
 export const SIGN_UP_BUTTON = () => ({
   type: types.SIGN_UP_BUTTON
 }) 

 export const CREATE_CARD = (event) => ({
   type: types.CREATE_CARD,
   payload: event
 }) 
  
 export const HANDLE_CHANGE = (label, change) => ({
   type: types.HANGLE_CHANGE,
   payload: {label, change}
 }) 

 export const SHOW_FAVS = () => ({
   type: types.SHOW_FAVS,
 }) 
  
 export const RETURN_HOME = () => ({
   type: types.RETURN_HOME,
 })