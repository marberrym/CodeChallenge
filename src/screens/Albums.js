import React, { Component } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AlbumLink from '../components/AlbumLink';
import { connect } from 'react-redux'; 


class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(response => {console.log(response)
      this.setState({albums: response})
    }) 
  }
  
  render() {
    let deleteAlbum = (id) => {
        let newAlbums = [...this.state.albums].filter(album => album.id != id)
        this.setState({albums: newAlbums})
    } 
    
    return <div className="pageLayout">
      <NavBar />
      <Header />
      {this.state.albums ?
        <div className="albumSection">
          {this.state.albums.map(album => <AlbumLink album={album} key={album.id} deleteAlbum={deleteAlbum}/>)}
        </div>
      :
        <div>Loading</div>    
      }
    </div>
  }
}

let AlbumsSmart = connect(state=>({photos: state.photos}))(Albums)

export default AlbumsSmart;
