import React from 'react';
import * as constants from '../constants/constants';

const NavBar = props => {
    const viewButton = [];
    if (props.view === constants.HOMEPAGE_EVENTS) {
      viewButton.push(<button id='favsButton' key="favsButton" onClick={props.showFavs}>FAVORITES</button>)
    } else if (props.view === constants.HOMEPAGE_FAVS) {
      viewButton.push(<button id='eventsButton' key="eventsButton" onClick={props.returnHome}>HOME</button>)
    }
    return (
        <div className='navBar'>
            <button id='sortButton' onClick={props.sortButton}>SORT BY {(props.sort === constants.PRICE)? constants.DATE : constants.PRICE}</button>
            {viewButton}
            <input 
              placeholder='SEARCH FOR PERFORMERS' 
              id='searchBar' 
              type='text' 
              label='searchBar' 
              onChange={(e) => {props.handleChange(e.target.getAttribute('label'), e.target.value)}}/>
            <button id='addFavsButton' type='submit' onClick={props.addFav}>ADD</button>
            <button id='logOutButton' type='submit' onClick={props.logOut}>LOGOUT</button>
        </div>
    )
}

export default NavBar;