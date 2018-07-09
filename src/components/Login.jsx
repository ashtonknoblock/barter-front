import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addUser } from '../actions/actions.js';
import Register from './Register.jsx';
import { Button, Form } from 'semantic-ui-react'

const initialState = {
    username: "",
    password: "",
    loading: false,
}



class Login extends Component {
    state = initialState;

    inputChange = field => evt => { //handling input change for each feild  (username, password)
        this.setState({
            [field]: evt.target.value
        })
    }

    fetchLogin = (e) => { //triggered when submitting Login Info

        const postRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password, //The inputChange function will set these to whatevr the user types
            }),
        }


        fetch("https://barter-mac.herokuapp.com/login", postRequestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    let UserCredentials = {
                        data,
                        username: this.state.username
                    }
                    sessionStorage.setItem('user', this.state.username)
                    this.props.dispatch(addUser(UserCredentials));
                    this.props.history.push('/home');
                }
                else if (this.state.username === "" && this.state.password === "") {
                    alert('Cannot submit empty form. Please type somthing.')
                }
                else if (this.state.username === "") {
                    alert('Please enter a Username')
                }
                else if (this.state.password === "") {
                    alert('Please enter a Password')
                }

                else {
                    return alert('Incorrect Username or Password');
                }
            })
    }

    render() {
        return (
            <React.Fragment>
                <div id="login-form-div">
                    <Form className=" ui form" size="large">
                        <Form.Field>
                            <label>Username:</label>
                            <input value={this.state.username} onChange={this.inputChange("username")} required placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={this.inputChange("password")} required placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                        </Form.Field>
                        <Button secondary onClick={this.fetchLogin} type='submit'>Sign In</Button>
                    </Form>
                </div>
                <div id="register-form-div">
                    <Register />
                </div>
            </React.Fragment>








            /* // <React.Fragment>
            //     <div id="loginForm">
            //         <legend>Sign In:</legend>
            //         Username:<input className="log" value={this.state.username} onChange={this.inputChange("username")} required></input>
            //         Password:<input className="log" type="current-password" value={this.state.password} onChange={this.inputChange("password")} required></input>
            //         <input type="hidden" name="redirect"></input>
            //         <button className="FORMbtn" type="submit" onClick={this.fetchLogin}>Sign In</button>
            //     </div>
            //     <br />
            //     <br />
            //     <Register />
            // </React.Fragment> */
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.username,
        token: state.token
    }
}

export default withRouter(connect(mapStateToProps)(Login))