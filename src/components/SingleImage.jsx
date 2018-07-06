import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = (props) => (
<div>
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
    </Modal.Content>
  </Modal>
</div>
)

export default ModalModalExample







// import React, { Component } from 'react';

// const SingleImage = (props) =>  { 
//     return(
//         <div>
//             <img src={props.src} alt={props.src}></img>
//             <p>posted by {props.userName}</p>
//             <p>{props.description}</p>
//         </div>
//     )
// }


// export default SingleImage 
