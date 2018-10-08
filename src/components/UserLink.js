import React from 'react';
import { Link } from 'react-router-dom';

let UserLink = (props) =>
    <Link to={`/user/${props.user.id}`}>
        <div className="userCard" onClick={event => {
            props.assignUser(props.user.name, props.user.id)
        }
        }>
            <img className="userCardImage" src="./spike.gif" />
            <div className="userInfo">
                <div>{props.user.name}</div>
                <div>{props.user.email}</div>
                <div>{props.user.phone}</div>
            </div>
        </div>
    </Link>

export default UserLink;