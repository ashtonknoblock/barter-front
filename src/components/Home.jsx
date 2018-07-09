import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadImage from './UploadImage';
import Images from './Images.jsx'


class Home extends Component {



    render() {
        // If token is empty : Register need to sign in
        const currentAuth = this.props.authenticated;

        return(
            <React.Fragment>
                {currentAuth === false ? 
                    <div>
                        <p>Please Sign in first</p>
                    </div> :
                    <div>
                        <UploadImage />
                        <br />
                        <Images />
                    </div>
                }
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        authenticated: state.authenticated
    }
}

export default connect(mapStateToProps)(Home);