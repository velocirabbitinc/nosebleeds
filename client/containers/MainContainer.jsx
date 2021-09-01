import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import NavBar from '../components/NavBar.jsx';
import * as constants from '../constants/constants';
import * as actions from '../actions/actions';

const mapStateToProps = state => {
  return {
    view: state.geek.view,
    username: state.geek.username,
    password: state.geek.password,
    searchBar: state.geek.searchBar
  }
}

const mapDispatchToProps = dispatch => ({
  handleChange: (label, value) => dispatch(actions.HANDLE_CHANGE(label, value)),
  login: () => dispatch(actions.LOGIN()),
  signUpUser: () => dispatch(actions.SIGN_UP_USER()),
  signUpForm: () => dispatch(actions.SIGN_UP_FORM()),
  addFav: () => dispatch(actions.ADD_FAV()),
  showFavs: () => dispatch(actions.SHOW_FAVS()),
  returnHome: () => dispatch(actions.RETURN_HOME()),
})

class MainContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      if (this.props.view === constants.HOMEPAGE_EVENTS || this.props.view === constants.HOMEPAGE_FAVS) {
        return (
          <div>
            <NavBar 
              handleChange={this.props.handleChange}
              returnHome={this.props.returnHome}
              showFavs={this.props.showFavs}
              searchBar={this.props.searchBar}
              addFav={this.props.addFav}
              view={this.props.view}
            />
            <DisplayContainer />
          </div>
        );
      };
      if (this.props.view === constants.LOGIN) {
        return (
          <div>
            <Login 
              login={this.props.login} 
              handleChange={this.props.handleChange}
              username={this.props.username}
              password={this.props.password}
              signUpForm={this.props.signUpForm}
            />
          </div>
        );
      }; 
      if (this.props.view === constants.SIGN_UP) {
        return (
          <div>
            <Signup 
              signUpUser={this.props.signUpUser} 
              signUpForm={this.props.signUpForm}
              username={this.props.username}
              password={this.props.password}
              handleChange={this.props.handleChange}
            />
          </div>
        );
      };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
