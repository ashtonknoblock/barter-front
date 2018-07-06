import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';




class UploadImage extends Component {
//TODO: fetch 'POST' to collins backend, so when an image is up.oaded it goes to the database

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
    }



    render() {
        return(     //map through images array and display them each in there own div.
            <React.Fragment>
                <div>
                    <h1>Post an image of the item you want to start trading with</h1>
                    <form method="POST" encType="multipart/form-data" onSubmit={this.imageSubmit} onChange={this.validateForm}>
                            <div>
                                <span>Select an image to upload:</span>
                                <input type="file" accept="image/*" name="myFile" id="file"></input>
                            </div>
                                <input id="description" type="text" placeholder="Give fellow Barterers some info on your item..." name="description"></input>
                        <button type="submit" className='btn'>Start Bartering with this item</button>
                    </form>
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