import React from 'react'
import { Button, Header, Image, Modal, Form, FormField } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'



const SingleImage = (props) => {


 const postComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;

    const formData = new FormData(event.target);
    const currentUser = props.username;
    formData.append('user',currentUser)

    const postReqOptions = {
      method: "POST",
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        currentUser: currentUser,
        comment: comment,
        itemID: props.itemID,
      })
    }

    fetch("http://localhost:5000/comment", postReqOptions)
    .then(data => console.log(data))
  }


  return (
    <div className="modal">
      <img src={props.src} alt={props.src}></img>
      <p>{props.itemName}</p>
      <Modal trigger={<Button primary>View this post</Button>}>
        <Modal.Header>{props.itemName}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={props.src} />
          <Modal.Description>
            <Header>Posted by {props.userName}</Header>
            <p>{props.description}</p>
          </Modal.Description>
          <Form onSubmit={postComment}>
            <div>
              Comment on this item:
                  <FormField width='fifteen' control="input" name="comment" placeholder="comment if you are interested in this item"></FormField>
              <Button type="submit">Submit Comment</Button>
            </div>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      username: state.userName
    }
}




export default withRouter(connect(mapStateToProps)(SingleImage))


