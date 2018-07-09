import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label } from 'semantic-ui-react'




class UploadImage extends Component {

    imageSubmit = (event) => {
        event.preventDefault();


        const formData = new FormData(event.target);
        const currentUser = this.props.username;
        console.log("currentUser = ", currentUser);
        formData.append('user', currentUser);

        const postRequestOptions = {
            method: "POST",
            mode: 'cors',
            body: formData,
        }


        fetch("http://localhost:5000/upload", postRequestOptions)
            .then(data => {
                console.log(data);
            })
        this.refs.file.value = '';
    }

///!!!!!!!!**********$$$$$%%%%%@@@****  Should we put the upload image form in a modal? have it say,
////                      $$$$%%%^^^@@  "have something you want to trade? *upload an image*" w a link to modal
    render() {
        return (
            <React.Fragment>
                <div className="ui centered grid">
                    <Form size="big" widths="equal" className="ui form" onSubmit={this.imageSubmit} method="POST" encType="multipart/form-data">
                        <h2>Post an image of the item you want to start trading with</h2>

                        <Form.Group widths="16">
                            <Form.Field lable="Choose an image">
                                <label htmlFor = "Inputfile" className="custom-file-upload">
                                    <input type="file" ref="file" accept="image/*" name="myFile" id="Inputfile"></input>
                                </label>
                                <div className="ui large">
                                    <Form.Field lable="Title of your image" size="massive">
                                        <div className="ui divider"></div>
                                        <Form.Input type="text" name="itemName" id="itemName" placeholder="Item Title..."></Form.Input>
                                    </Form.Field>
                                </div>
                                <div className="ui fluid">
                                    <input type="text" id="description" placeholder="Item description..." name="description"></input>
                                </div>
                                <Button secondary type="submit" className='btn'>Start Bartering with this item</Button>
                            </Form.Field>
                        </Form.Group>
                    </Form>

                </div>
            </React.Fragment>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.userName
    }
}

export default withRouter(connect(mapStateToProps)(UploadImage))
