import React from 'react';
import Event from './Event.jsx'

const MainDisplay = props => {
  const newEventList = [];
  for (let i = 0; i < props.eventList.length; i += 1) {
    const event = props.eventList[i];
    newEventList.push(
      <Event 
        key={`${i}th event`}
        name={event.title}
        url={event.url}
        date={event.dateTime}
        price={event.price}
        image={event.image}
        buyTix={props.buyTix}
      />)
  }

  return (
    <div className="mainDisplay">
      {newEventList}
    </div>
  )
}

export default MainDisplay;