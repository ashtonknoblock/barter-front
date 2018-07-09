import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';
import { keepUser } from './actions/actions.js';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx'
import { Route, Switch, Link } from 'react-router-dom';
import { Button, List } from 'semantic-ui-react'



class App extends Component {


  render() {

    const loggedInUser = sessionStorage.getItem('user');
    if (loggedInUser) {
      this.props.dispatch(keepUser(loggedInUser))
    }

    return (
      <React.Fragment>
        <div className="App">

          <div id="nav">
            <ul id='nav'>

              <div id="LoginBtn">
                <Button primary className="btn" type="submit"><Link to="/">Login</Link></Button >
              </div>

              <div id="HomeBtn">
                <Button primary className="btn" type="submit"><Link to="/home">Home</Link></Button >
              </div>

              <div id="profileBtn">
                <Button primary className="btn" type="submit"><Link to="/profile">My Profile</Link></Button >
              </div>

              <div id="logoutBtn">
                <Button primary className="btn" type="submit"><Link to="/">Log Out</Link></Button >
              </div>

            </ul>
          </div>

          <Switch>

            <Route exact path="/" component={Login}/>
            <Route exact path ="/home" component={Home}/>

          </Switch>
        </div>

      </React.Fragment>
    );
  }
}

export default withRouter(connect()(App))
