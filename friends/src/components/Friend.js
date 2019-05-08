import React from 'react';
import './Friend.css';

function Friend(props) {
    //console.log("Friend props --->")
    //console.log(props);

    const updateHandle = (e) => {
        e.preventDefault();
        props.setActiveFriend(props.friend);
        //props.updateFriend();
    }

    const deleteHandle = e => {
        e.preventDefault();
        props.setActiveFriend(props.friend);
        props.deleteFriend();
    }

    return (
        <div className="friend">
            <h3 className="friend-name">{props.friend.name}</h3>
            <h4 className="friend-age">{props.friend.age}</h4>
            <p className="friend-email">{props.friend.email}</p>

            <button onClick={(e) => updateHandle(e)} className="update-btn">Update</button>
            <button onClick={e => deleteHandle(e)} className="delete-btn">Delete</button>
        </div>
    );
}


export default Friend;