import React from 'react';
import Favs from './Favs.jsx';

const FavsDisplay = props => {
  const newFavsList = [];
  for (let i = 0; i < props.favsList.length; i += 1) {
    const fav = props.favsList[i];
    newFavsList.push(
      <Favs 
        key={`${i}th fav`}
        typeThing={fav.typeThing}
        name={fav.name}
        image={fav.image}
        id={fav.id}
      />)
  }

  return (
    <div className="favsDisplay">
      {newFavsList}
    </div>
  )
}

export default FavsDisplay;