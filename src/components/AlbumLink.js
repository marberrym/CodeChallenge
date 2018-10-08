import React from 'react';
import { Link } from 'react-router-dom';

let AlbumLink = (props) =>
    <Link to={`/album/${props.album.id}`}>
        <div className="albumCard">
            {console.log(props.album)}
            <img className="albumCardImage" src="./spike.gif" />
            <div className="albumInfo">
                <div>{props.album.title}</div> 
                <button onClick={event => {
                    event.preventDefault();
                    props.deleteAlbum(props.album.id);
                }}>Delete Album</button>
            </div>
        </div>
    </Link>

export default AlbumLink;