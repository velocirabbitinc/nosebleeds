import React from 'react';

const Favs = props => {
    return (
        <div className='eventCard' id='favCard'>
            <p>{props.name}</p>
            <p>{props.typeThing.toUpperCase()}</p>
            <img src={props.image}/>
        </div>
    )
}

export default Favs;