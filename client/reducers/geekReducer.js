 import * as types from '../constants/actionTypes';
 import * as constants from '../constants/constants';

 const initialState = {
   view: constants.LOGIN,
   username: '',
   password: '',
   searchBar: '',
   userID: '',
   favsList: [], // array of objects containing name, image, ID(?)
   eventList: [] // array of objects containing info including name, image, location, url, ID(?)
 };
  
 const geekReducer = (state = initialState, action) => {
   switch (action.type) {
    case types.SIGN_UP_USER: {
      const userID = action.payload.userID;
      return {...state,
        view: constants.HOMEPAGE_EVENTS,
        userID,
        username: '',
        password: '',
      }
    } 

    case types.LOGIN: {
      const userID = action.payload.userID;
      const favsList = action.payload.favsList;
      const eventList = action.payload.eventList;
      return {...state,
        view: constants.HOMEPAGE_EVENTS,
        userID,
        favsList,
        eventList
      }
    }
  
    case types.LOG_OUT: {        
      return {
        ...initialState,
      }
    }
  
    case types.ADD_FAV: {        
      const favsList = action.payload.favsList;
      const eventList = JSON.parse(JSON.stringify(state.eventList)).concat(action.payload.eventList)
      return {...state,
        favsList,
        eventList
      }
    }
 
    case types.BUY_TIX: {       
      // idk how to redirect lol :D
      return {...state,
        chosenTopics: newChosenTopics
      }
    }
    
    case types.HANDLE_CHANGE: {
      const label = action.payload.label;
      const value = action.payload.value;
      return {...state,
        [label]: value
      }
    }
  
    case types.SIGN_UP_FORM:  {
      return {...state,
        view: constants.SIGN_UP,
        username: '',
        password: ''
      }
    }
  
    case types.SHOW_FAVS: {
      return {...state,
        view: constants.HOMEPAGE_FAVS
      }
    }

    case types.RETURN_HOME: {
      return {...state,
        view: constants.HOMEPAGE_EVENTS
      }
    }
  
    default:
      return state;    
    }
 };
  
 export default geekReducer;
  