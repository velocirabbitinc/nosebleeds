import React from 'react';
import Event from './Event.jsx'

const MainDisplay = props => {
  const newEventList = [];
  // console.log(props.eventList);
  for (let i = 0; i < props.eventList.length; i += 1) {
    newEventList.push(<Event url={props.eventList[i].url}/>)
  }

  return (
    <div>
      {newEventList}
    </div>
  )
}

export default MainDisplay;