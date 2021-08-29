import React, { Component } from 'react';

class TestComp extends Component {
    constructor () {
        super()
        this.state = {

        }
    }
    render () {
        return (
            <div>
            <head>

            </head>
            <body>
                <h1 id="profile">YOUR MEDIA</h1>
                <div className="search"><input id="searchBar" placeholder="search"></input><button id="searchButton">SEARCH</button></div>
                <div class="tab">
                    <button class="tablinks" onclick="openGenre(event, 'Action')">MOVIES</button>
                    <button class="tablinks" onclick="openGenre(event, 'Comedy')">TV SHOWS</button>
                    <button class="tablinks" onclick="openGenre(event, 'Horror')">VIDEO GAMES</button>
                    <button class="tablinks" onclick="openGenre(event, 'Horror')">BOOKS</button>
                    <button class="tablinks" onclick="openGenre(event, 'Horror')">PODCASTS</button>
                    <button class="tablinks" onclick="openGenre(event, 'Horror')">MUSIC</button>
                    <button class="tablinks" onclick="openGenre(event, 'Horror')">REAL LIFE</button>
                    <button class="tablinks" onclick="openGenre(event, 'Horror')">ALL</button>
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