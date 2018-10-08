import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import MainPhotoView from '../components/MainPhotoView';

class MainPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {}
        }
    }

    componentDidMount() {
        fetch(`http://jsonplaceholder.typicode.com/photos/?id=${this.props.match.params.id}`)
        .then(response => response.json())
        .then(response => this.setState({photo: response[0]})) 
    }

    render() {
        return <div className="pageLayout">
            <NavBar />
            <Header />
            {this.state.photo ?
                <MainPhotoView photo={this.state.photo} />
            :
                <div>Loading</div>    
            }
        </div>
    }
}

export default MainPhoto;
