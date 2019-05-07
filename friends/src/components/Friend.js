import React from 'react';
import './Friend.css';

function Friend(props) {
    //console.log("Friend props --->")
    //console.log(props);

    return (
        <div className="friend">
            <h3 className="friend-name">{props.friend.name}</h3>
            <h4 className="friend-age">{props.friend.age}</h4>
            <p className="friend-email">{props.friend.email}</p>
        </div>
    );
}


export default Friend;