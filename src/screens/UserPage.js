import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import AlbumLink from '../components/AlbumLink';
import { connect } from 'react-redux';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumList: []
        }
    }

    componentDidMount() {
        fetch(`http://jsonplaceholder.typicode.com/albums/?userId=${this.props.match.params.id}`)
        .then(results => results.json())
        .then(results => {
            this.setState({albumList: results})
        })
    }

    render() {
        let deleteAlbum = (id) => {
            let newAlbums = [...this.state.albumList].filter(album => album.id != id)
            this.setState({albumList: newAlbums})
        } 

        return <div className="pageLayout">
            <NavBar />
            <Header />
            <div className="albumHeader">{
            this.props.user ?
                `${this.props.user.name}'s Albums`
            :
                null
            }</div>
            {this.state.albumList ?
                <div className="albumSection">
                    {this.state.albumList.map(album => <AlbumLink album={album} key={album.id} deleteAlbum={deleteAlbum}/>)}
                </div>
            :
                <div>Loading</div>    
            }
        </div>
    }
}

let UserPageSmart = connect(state => ({user: state.user}))(UserPage);

export default UserPageSmart;

