import React from 'react';
import * as constants from '../constants/constants';

const NavBar = props => {
    const viewButton = [];
    if (props.view === constants.HOMEPAGE_EVENTS) {
      viewButton.push(<button onClick={props.showFavs}>My Faves</button>)
    } else if (props.view === constants.HOMEPAGE_FAVS) {
      viewButton.push(<button onClick={props.returnHome}>Return Home</button>)
    }
    return (
        <div className='navBar'>
            {viewButton}
            <input id='searchBar' type='text' label='searchBar' onChange={(e) => {props.handleChange(e.target.getAttribute('label'), e.target.value)}}/>
            <button id='addFavsButton' type='submit' onClick={props.addFav}>Add Favorite Performer</button>
        </div>
    )
}

export default NavBar;