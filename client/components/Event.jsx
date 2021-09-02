import React from 'react';

const Event = props => {
  let price;
  if (props.price) {
    price = `\$${props.price}`;
  } else {
    price = 'No pricing information'
  }
  return (
    <div className='eventCard' id='eventCard'>
      <p>{props.name}</p>
      <a className='buyTixButton' href={props.url}  target='_blank'>
        <img src={props.image}/>
      </a>
      <p>{props.date}</p>
      <p>{price}</p>
    </div>
  )
}

export default Event;