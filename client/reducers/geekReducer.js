import * as types from '../constants/actionTypes';
import * as constants from '../constants/constants';

const initialState = {
  view: constants.LOGIN,
  username: '',
  password: '',
  searchBar: '',
  userID: '',
  favsList: [], // array of objects containing name, image, ID(?)
  eventList: [], // array of objects containing info including name, image, location, url, ID(?)
  sort: constants.PRICE
};
  
const geekReducer = (state = initialState, action) => {
  console.log('this is the top of the reducer')
  switch (action.type) {
    case types.SIGN_UP_USER: {
      const userID = action.payload.userID;
      console.log('this show be working',userID)
      return {...state,
        view: constants.HOMEPAGE_EVENTS,
        userID,
        username: '',
        password: '',
      }
    } 

    case types.LOGIN: {
      console.log(action.payload.favsList)
      const userID = action.payload.userID || '';
      const favsList = action.payload.favsList || [];
      const eventList = action.payload.eventList || [];
      eventList.sort((a,b) => {
        return (state.sort === constants.PRICE)? a.price - b.price : new Date(b.date) - new Date(a.date)
      })
      return {...state,
        view: (userID)? constants.HOMEPAGE_EVENTS : constants.LOGIN,
        userID,
        favsList,
        eventList,
        username: '',
        password: ''
      }
    }

    case types.LOG_OUT: {        
      return {
        ...initialState,
      }
    }

    case types.ADD_FAV: {    
      if (action.payload.newFav) {
        const favsList = JSON.parse(JSON.stringify(state.favsList))
        favsList.push(action.payload.newFav)
        const eventList = JSON.parse(JSON.stringify(state.eventList)).concat(action.payload.eventsList)
        eventList.sort((a,b) => {
          return (state.sort === constants.PRICE)? a.price - b.price : new Date(b.date) - new Date(a.date)
        })
        return {...state,
          favsList,
          eventList
        }
      }
      return { ...state
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

    case types.RETURN_TO_LOGIN: {
      return {...state,
        view: constants.LOGIN
      }
    }

    case types.SORT: {
      const sort = (state.sort === constants.PRICE)? constants.DATE : constants.PRICE;
      const eventList = JSON.parse(JSON.stringify(state.eventList));
      eventList.sort((a,b) => {
        return (sort === constants.PRICE)? a.price - b.price : new Date(a.dateTime) - new Date(b.dateTime)
      })
      return { ...state,
        eventList,
        sort
      }
    }

    default:
      return state;    
    }
};

export default geekReducer;
