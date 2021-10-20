import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as constants from '../constants/constants';
import * as actions from '../actions/actions';
import MainDisplay from '../components/MainDisplay.jsx';
import FavsDisplay from '../components/FavsDisplay.jsx';

const mapStateToProps = state => {
    return {
        view: state.geek.view,
        userID: state.geek.userID,
        favsList: state.geek.favsList,
        eventList: state.geek.eventList
    }
}

class DisplayContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.view === constants.HOMEPAGE_EVENTS) {
            return (
                <div>
                    <MainDisplay className="cardContainer"
                        eventList={this.props.eventList}
                    />
                </div>
            )
        }
        if (this.props.view === constants.HOMEPAGE_FAVS) {
            return (
                <div>
                    <FavsDisplay className="cardContainer"
                        favsList={this.props.favsList}/>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, null)(DisplayContainer);