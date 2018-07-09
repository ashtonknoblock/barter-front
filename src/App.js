import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';
import { keepUser } from './actions/actions.js';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx'
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react'
import Register from './components/Register';



class App extends Component {


  render() {

    const loggedInUser = sessionStorage.getItem('user');
    if (loggedInUser) {
      this.props.dispatch(keepUser(loggedInUser))
    }

    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Image centered size="small" src="/4b35826a-1a80-470d-89b5-fd1ea1b62e5e.png"/>
         </header>

          <div id="nav">
            <ul id='nav'>

              <div id="LoginBtn">
                <Button primary className="btn" type="submit"><Link to="/">Account</Link></Button >
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
            <Route exact path="/" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path ="/home" component={Home}/>
          </Switch>
          </div>

      </React.Fragment>
    );
  }
}

export default withRouter(connect()(App))
