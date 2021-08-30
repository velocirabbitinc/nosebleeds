import React, { Component } from 'react';

class HomePage extends Component {
    constructor () {
        super()
        this.state = {
            lowestDodgerPrice: '',
            lowestAngelPrice: '',
            lowestLafcPrice: '',
            lowestGalaxyPrice: '',
            lowestLakerTicket: '',
            lowestChargerTicket: '',
            lowestClipperTicket: '',
            lowestRamTicket: ''
        }
    }
    // .stats.lowest_price_good_deals
    // .url
    getData = () =>{fetch('https://api.seatgeek.com/2/events?client_id=MjMwODQ2OTZ8MTYzMDA5MTEwMy4xMjAzNg&geoip=true&performers.slug=los-angeles-dodgers')
    .then(response => response.json())
    .then(data =>  
     {var today = new Date();
      var date = today.getFullYear()+'-'+'0'+(today.getMonth()+1)+'-'+today.getDate();
      console.log(date);
      if(data.events[0].datetime_utc.substring(0,10) === date) 
     { console.log(data.events[0])}})};
  
    render () {
      this.getData();
        return (
            <div>
            <head>

            </head>
            <body>
                <h1 id="profile">CLICK ON A TEAM TO SEE THE LOWEST TICKET PRICE OF THE DAY</h1>
                <div className="search"><input id="searchBar" placeholder="search"></input><button id="searchButton">SEARCH</button></div>
                <div class="tab">
                    <button className="tablinks" onClick="lowest price laker ticket">LAKERS</button>
                    <button className="tablinks" onClick="lowest price clipper ticket">CLIPPERS</button>
                    <button className="tablinks" onClick="lowest price rams ticket">RAMS</button>
                    <button className="tablinks" onClick="lowest price dodgers ticket">DODGERS</button>
                    <button className="tablinks" onClick="lowest price angels ticket">ANGELS</button>
                    <button className="tablinks" onClick="lowest price lafc ticket')">LAFC</button>
                    <button className="tablinks" onClick="lowest price galaxy ticket')">GALAXY</button>
                    <button className="tablinks" onClick="lowest price chargers ticket')">CHARGERS</button>
                </div>
            </body>
            </div>
        )
    }
}

export default HomePage;