import React from 'react'
import { Button, Header, Image, Modal, Form, FormField, Icon} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'



const SingleImage = (props) => {


 const postComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const itemsUser = props.userName;

    const postReqOptions = {
      method: "POST",
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        comment: comment,
        itemID: props.itemID,
        itemsUser: itemsUser
      })
    }

    fetch("http://localhost:5000/comment", postReqOptions)
    .then(data => console.log(data))
  }



  return (
    <div className="modal">
      <img src={props.src} alt={props.src}></img>
      <p>{props.itemName}</p>
      <Modal className="ui centered"trigger={<Button primary>View Item</Button>}>
        <Modal.Header>{props.itemName}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={props.src} />
          <Modal.Description>
            <Header>{props.userName} posted {props.itemName}
              <p>{props.description}</p>
            </Header>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>
            <p id='User-comment'>example of a comment.</p>

          </Modal.Description>
          </Modal.Content>
          <Form onSubmit={postComment}>
            <div>
              Comment on this item:
                  <FormField width='fifteen' control="input" name="comment" placeholder="comment if you are interested in this item"></FormField>
              <Button secondary type="submit">Submit Comment <Icon name="right chevron"  /></Button>
            </div>
          </Form>
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


