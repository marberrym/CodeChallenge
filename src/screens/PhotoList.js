import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Photo from '../components/Photo';

class PhotoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoList: []
        }
    }

    componentDidMount() {
        fetch(`http://jsonplaceholder.typicode.com/photos/?albumId=${this.props.match.params.id}`)
        .then(results => results.json())
        .then(results => {
            this.setState({photoList: results})
        })
    }

    render() {
        let deletePhoto = (id) => {
            let newPhotoList = [...this.state.photoList].filter(photo => photo.id != id)
            this.setState({photoList: newPhotoList})
        }

        return <div className="pageLayout">
            <NavBar />
            <Header />
            {this.state.photoList ?
                <div className="albumSection">
                    {this.state.photoList.map(photo => <Photo photo={photo} key={photo.id} deletePhoto={deletePhoto}/>)}
                </div>
            :
                <div>Loading</div>    
            }
        </div>
    }
}

export default PhotoList;