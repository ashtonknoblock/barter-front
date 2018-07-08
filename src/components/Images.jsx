import React, { Component } from 'react';
import SingleImage from './SingleImage';



export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = { imageData: [] }
    }

    fetchImages = () => {
        fetch("https://barter-mac.herokuapp.com/images")
            .then(res => res.json())
            .then(images => {
                let willBeState = [];

                for (let i = 0; i < images.length; i++) {
                    let imgObject = {};
                    let imgItems = images[i].items;

                    for (let j = 0; j < imgItems.length; j++) {
                        imgObject.userName = images[i].userName;
                        console.log(imgItems[j]._id)

                        let itemID = imgItems[j]._id;
                        let itemName = imgItems[j].itemName;
                        let imageUrl = imgItems[j].imageURL;
                        let imageDescription = imgItems[j].description;

                        imgObject.itemID = itemID;
                        imgObject.itemName = itemName;
                        imgObject.imageURL = imageUrl;
                        imgObject.imageDescription = imageDescription;
                        willBeState.unshift(imgObject);

                        // We had to reset the imgObject object because the above code
                        // was replacing the old object even after it was pushed
                        imgObject = {};
                    }
                }
                console.log(willBeState);
                this.setState({
                    // imageData should be changed to itemData
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
        console.log(this.state.imageData);
        const imgItems = this.state.imageData.map((image, i) => {
            return (<SingleImage key={i.toString()} itemID={image.itemID} userName={image.userName} src={image.imageURL} description={image.imageDescription} />)
        });
        return (
            <React.Fragment>
                <div>
                    {imgItems}
                </div>
            </React.Fragment>
        )
    }
}