import React, { Component } from 'react';
import { Link } from 'react'


export default class Nav extends Component {

    render() {
        return (
            <React.Fragment>
    
                <div className="App">
                    <header className="App-header">
                    <h1 className="App-title">Kwitter</h1>
                    </header>
                </div>
    
                <div id="navigation">
    
                <ul id='nav'>
                    <div id="homeBtn">
                    <button className="btn" type="submit"><Link to="/">Home</Link></button>
                    </div>
                    
                    <div id="messagesBtn">
                    <button className="btn" type="submit"><Link to="/messages">Messages</Link></button>
                    </div>
    
                    <div id="profileBtn">
                    <button className="btn" type="submit"><Link to="/profile">Profile</Link></button>
                    </div>
    
                    <div id="logoutBtn">
                    <button className="btn" type="submit" onClick={this.fetchLogout}><Link to="/">Log Out</Link></button>
                    </div>
                </ul>
    
                </div> 
            </React.Fragment>
        )
    }
}
