import axios from 'axios';
import * as types from '../constants/actionTypes';

//ASYNC ACTIONS
export const SIGN_UP_USER = () => (dispatch, getState) => {
  const username = getState().geek.username;
  const password = getState().geek.password;
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

export const LOGIN = () => (dispatch, getState) => {
  dispatch({
    type: types.LOGIN,
    payload: {eventList: [], favsList: []}
  })
  // const username = getState().geek.username;
  // const password = getState().geek.password;
  // axios.post('/user/authUser/',{username: username, password: password})
  //   .then((info) => {
  //     console.log(info.data)
  //     if (info.status === 200){
  //       dispatch({ 
  //         type: types.LOGIN,
  //         payload: {username: username, userID: info.data.userID}
  //       });
  //     } 
  //   })
  //   .catch( e => {alert("Incorrect password. Please try again.")});
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

export const ADD_FAV = () => (dispatch, getState) => {
  const userID = getState().geek.userID;
  const newFav = getState().geek.searchBar;
  const favsList = getState().geek.favsList.map( el => el.name)
  if (!favsList.includes(newFav)) {
    axios.post('/api/addTopics/', {userID, newFav})
      .then((res) => {
        if(res.status === 200){
          console.log('Fav added')
          dispatch({
            type: types.ADD_FAV,
          payload: {message: res.message, favsList: res.favsList, eventsList: res.eventsList}
          })
        } // WHAT HAPPENS IF WE CAN'T FIND THE PERFORMER?
      })
      .catch(console.error)
    } else {
      dispatch({
        type: types.ADD_FAV,
        payload: {message: `You already like ${newFav}!`}
      })
    }
};

 export const BUY_TIX = (url) => (dispatch, getState) => {
   //MAKE REDIRECT REQUEST TO URL
  };
   
//SYNC ACTIONS
export const HANDLE_CHANGE = (label, value) => ({
  type: types.HANDLE_CHANGE,
  payload: {label, value}
}) 

 export const SIGN_UP_FORM = () => ({
   type: types.SIGN_UP_FORM
 }) 

 export const SHOW_FAVS = () => ({
   type: types.SHOW_FAVS,
 }) 
  
 export const RETURN_HOME = () => ({
   type: types.RETURN_HOME,
 })