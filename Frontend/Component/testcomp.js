import React, { Component } from 'react';

class TestComp extends Component {
    constructor () {
        super()
        this.state = {

        }
    }
  getData = () =>{fetch('https://api.seatgeek.com/2/events?client_id=MjMwODQ2OTZ8MTYzMDA5MTEwMy4xMjAzNg&geoip=true&performers.slug=los-angeles-dodgers')
    .then(response => response.json())
    .then(data => console.log(data.events[0].stats.lowest_price_good_deals))}
  
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


                <div id="Action" class="tabcontent">
                    <h3>Action</h3>
                    <p>Action movies</p>
                </div>

                <div id="Comedy" class="tabcontent">
                    <h3>Comedy</h3>
                    <p>Comedy movies</p>
                </div>

                <div id="Horror" class="tabcontent">
                    <h3>Horror</h3>
                    <p>Horror movies</p>
                </div>

                <div id="Drama" class="tabcontent">
                    <h3>Drama</h3>
                    <p>Drama movies</p>
                </div>
            </body>
            </div>
        )
    }
}

export default TestComp