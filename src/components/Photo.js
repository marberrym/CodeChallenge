import React from 'react';
import { Link } from 'react-router-dom';

let Photo = (props) =>
    <Link to={`/photo/${props.photo.id}`}>
        <div className="photoCard">
            {console.log(props.photo)}
            <img className="photoCardImage" src={props.photo.thumbnailUrl} />
            <div className="photoInfo">
                <div>{props.photo.title}</div> 
                <button onClick={event => {
                    event.preventDefault();
                    props.deletePhoto(props.photo.id);
                }}>Remove Photo</button>
            </div>
        </div>
    </Link>

export default Photo;

    