import axios from 'axios';
import * as types from '../constants/actionTypes';

//ASYNC ACTIONS
export const SIGN_UP_USER = () => (dispatch, getState) => {
  const username = getState().geek.username;
  const password = getState().geek.password;
  axios.post('/api/signup/', {username: username, password: password}) // location: navigator.geolocation()})
    .then((info) => {
      console.log(info.data)
      if (info.status === 200){
        console.log('userID ',info.data.userID)
        dispatch({ 
          type: types.SIGN_UP_USER,
          payload: {userID: info.data.userID}
        });
      } 
    })
    .catch( e => {alert("This username already exists. Please pick a different username.")});
}

export const LOGIN = () => (dispatch, getState) => {
  // dispatch({
  //   type: types.LOGIN,
  //   payload: {eventList: [], favsList: []}
  // })
  const username = getState().geek.username;
  const password = getState().geek.password;
  console.log('clickly click')
  axios.post('/api/login/',{username: username, password: password})
    .then((info) => {
      console.log(info.data)
      if (info.status === 200){
        dispatch({ 
          type: types.LOGIN,
          payload: {userID: info.data.userID, eventList: info.data.eventList, favsList: info.data.favsList}
        });
      } 
    })
    .catch( e => {alert("Incorrect password. Please try again.")});
};

export const ADD_FAV = () => (dispatch, getState) => {
  const userID = getState().geek.userID;
  const newFav = getState().geek.searchBar;
  const favsList = getState().geek.favsList.map( el => el.name.toLowerCase())
  console.log('newFav ', newFav === '')
  if (!favsList.includes(newFav) && newFav !== '') {
    axios.post('/api/addTopics/', {userID, newFav})
      .then((res) => {
        if (res.data.failed) {
          window.alert(`${newFav} doesn't exist!`)
          dispatch({
            type: types.ADD_FAV,
          })
        } else {
          window.alert(`${newFav} added!`)
          console.log('line 69', res.data.newFav)
          dispatch({
            type: types.ADD_FAV,
            payload: {newFav: res.data.newFav, eventsList: res.data.eventsList}
          }) 
        }
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      window.alert(`You already like ${newFav}!`)
      dispatch({
        type: types.ADD_FAV,
        payload: {}
      })
    }
};

//SYNC ACTIONS
export const LOG_OUT = () => ({
    type: types.LOG_OUT
})

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

 export const RETURN_TO_LOGIN = () => ({
  type: types.RETURN_TO_LOGIN,
})

export const SORT = () => ({
  type: types.SORT
})