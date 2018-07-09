import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Comment } from 'semantic-ui-react'



const SingleComment = (props) => {
    return(
        <Comment>
        <Comment.Content>
          <Comment.Author as='a'>{props.username} replied:</Comment.Author>
          <Comment.Text>{props.comment}</Comment.Text>
        </Comment.Content>
      </Comment>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.userName
    }
}

export default withRouter(connect(mapStateToProps)(SingleComment))