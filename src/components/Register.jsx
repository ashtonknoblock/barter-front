import React, { Component } from 'react';

const initialState = {
  regUsername: "",
  regPassword: "",
}

export default class Register extends Component {
  state = initialState;

  inputChange = field => evt => { //handling input change for each feild  (username, password)
    this.setState({
      [field]: evt.target.value
    })
  }

  fetchRegister = (e) => { //triggered when submitting Register Info
    e.preventDefault();
    const registerOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        username: this.state.regUsername, //The inputChange function will set these to whatevr the user types
        password: this.state.regPassword,
      })
    }

    fetch("https://barter-mac.herokuapp.com/register", registerOptions)
      .then(response => response.json())
      .then(data => { 
      if (this.state.regUsername === "" && this.state.regPassword === ""){
          alert ('Cannot submit empty form. Please type somthing.');
      }
      else if (this.state.regUsername === ""){
        alert('Please enter the Username you would like to register with')
      }
      else if (this.state.regPassword === ""){
        alert('Please enter the Password you would like to register with')
      }
        else if(data.message === "you were successful"){
          alert('You have successfuly created an account, Please sign in to continue');
          
        } else if (data.message === 'Username is already taken'){
          alert('Username is already taken');
        }
      })
  }

  render() {
    return (
      <React.Fragment>
        <div id="registerForm">
          <legend>Register:</legend>
          Choose a Username:<input className="reg" value={this.state.regUsername} onChange={this.inputChange("regUsername")} required></input>
          Choose your Password:<input className="reg" type="password" value={this.state.regPassword} onChange={this.inputChange("regPassword")} required></input>
          <button className="FORMbtn" onClick={this.fetchRegister}>Register Me</button>
        </div>
      </React.Fragment>
    )
  }
}

