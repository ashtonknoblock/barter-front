import React, { Component } from 'react';
import { Button, Form, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


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
        if (this.state.regUsername === "" && this.state.regPassword === "") {
          alert('Cannot submit empty form. Please type somthing.');
        }
        else if (this.state.regUsername === "") {
          alert('Please enter the Username you would like to register with')
        }
        else if (this.state.regPassword === "") {
          alert('Please enter the Password you would like to register with')
        }
        else if (data.message === "you were successful") {
          alert('You have successfuly created an account, Please sign in to continue');
          this.setState({
            regUsername: "",
            regPassword: ""
          })
        } else if (data.message === 'Username is already taken') {
          alert('Username is already taken');
        }
      })

  }

  render() {
    const signInLink = <Button secondary><Link to="/login">Sign In</Link><Icon name="right chevron" /></Button>
    return (
      <React.Fragment>
        <div id="form-message-header">
            <Message 
      attached compact 
      color="blue"
      header='Welcome to Barter! Already have an account?'
      content={signInLink}
      size="big"
    />
      </div>
   
      <div id="register-form-div">
      <Form className=" ui form" size="large">
        <Form.Field>
          <label>Choose a username</label>
          <input value={this.state.regUsername} onChange={this.inputChange("regUsername")} required placeholder='Choose a username' />
        </Form.Field>
        <Form.Field>
          <label>Choose a Password</label>
          <input type="password" value={this.state.regPassword} onChange={this.inputChange("regPassword")} required placeholder='Choose a password' />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Button secondary onClick={this.fetchRegister} type='submit'>Register</Button>
      </Form>
      </div>
      </React.Fragment>
    )
  }
}

