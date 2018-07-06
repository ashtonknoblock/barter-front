import React, { Component } from 'react';
import ModalModalExample from './SingleImage';



export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {imageData: []}
    }

    fetchImages = () => {
        console.log('polling...');
        fetch("https://barter-mac.herokuapp.com/images")
            .then(res => res.json())
            .then(images => {
                let willBeState = [];
                
                for (let i = 0; i < images.length; i++) {
                    let imgObject = {};
                    let imgItems = images[i].items;
                        
                    for (let j = 0; j < imgItems.length; j++){
                        imgObject.userName = images[i].userName;

                        let itemName = imgItems[j].itemName;
                        let imageUrl = imgItems[j].imageURL;
                        let imageDescription = imgItems[j].description;

                        imgObject.itemName = itemName;
                        imgObject.imageURL = imageUrl;
                        imgObject.imageDescription = imageDescription;
                        willBeState.unshift(imgObject);

                        // We had to reset the imgObject object because the above code
                        // was replacing the old object even after it was pushed
                        imgObject = {};
                    }  
                }
                this.setState({
                    imageData: willBeState
                })
            })
    }
    componentDidMount = () => {
        this.fetchImages();
       const poll = setInterval(this.fetchImages, 5000);
        poll;
    }
     

    render() { 
        const imgItems = this.state.imageData.map((image, i) => {        
            return(<ModalModalExample key={i.toString()} userName={image.userName} src={image.imageURL} itemName={image.itemName} description={image.imageDescription}/>)
        });
        return(
            <React.Fragment>
                <div>
                    {imgItems}
                </div>
            </React.Fragment>
        )
    }
}