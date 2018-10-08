import React from 'react';

let MainPhotoView = (props) =>
    <div className="mainPhoto">
        <img src={props.photo.url} className="mainImage" />
        <div>{props.photo.title} from Album {props.photo.albumId}</div>
    </div>

export default MainPhotoView;