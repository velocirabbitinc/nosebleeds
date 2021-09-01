import React from 'react';
import Favs from './Favs.jsx';

const FavsDisplay = props => {
  const newFavsList = [];
  for (let i = 0; i < props.favsList.length; i += 1) {
    newFavsList.push(<Favs />)
  }

  return (
    <div>
      {newFavsList}
    </div>
  )
}

export default FavsDisplay;