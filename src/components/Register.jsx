import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { isBoolean } from 'util';

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
    let success = Boolean
    fetch("https://barter-mac.herokuapp.com/register", registerOptions)
      .then(response => response.json())
      .then(data => { 
        if (this.state.regUsername === "" && this.state.regPassword === "") {
          this.success = false;
          alert('Cannot submit empty form. Please type somthing.');
        }
        else if (this.state.regUsername === "") {
          this.success = false;
          alert('Please enter the Username you would like to register with')
        }
        else if (this.state.regPassword === "") {
          this.success = false;
          alert('Please enter the Password you would like to register with')
        }
        else if (data.message === "you were successful") {
          this.success = true;
          alert('You have successfuly created an account, Please sign in to continue');
          this.setState({
            regUsername: "",
            regPassword: ""
          })
        } else if (data.message === 'Username is already taken') {
          this.success = false;
          alert('Username is already taken');
        }
      })

  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Choose a username</label>
          <input value={this.state.regUsername} onChange={this.inputChange("regUsername")} required placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" value={this.state.regPassword} onChange={this.inputChange("regPassword")} required placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Button onClick={this.fetchRegister} type='submit'>Register</Button>
      </Form>



      // <React.Fragment>
      //   <div id="registerForm">
      //     <legend>Register:</legend>
      //     Choose a Username:<input className="reg" value={this.state.regUsername} onChange={this.inputChange("regUsername")} required></input>
      //     Choose your Password:<input className="reg" type="password" value={this.state.regPassword} onChange={this.inputChange("regPassword")} required></input>
      //     <button className="FORMbtn" onClick={this.fetchRegister}>Register Me</button>
      //   </div>
      // </React.Fragment>
    )
  }
}

